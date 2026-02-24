import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import AccessControl "authorization/access-control";

actor {
  // Authorization and Storage mixins
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  type CommonSection = {
    sectionTitle : Text;
    content : Text;
    images : [Storage.ExternalBlob];
  };

  type ContentData = {
    hero : CommonSection;
    aboutCompany : CommonSection;
    projectVision : CommonSection;
    whyRayagada : CommonSection;
    technicalSpecs : CommonSection;
    financialOverview : CommonSection;
    socialImpact : CommonSection;
    marketStrategy : CommonSection;
    valueChain : CommonSection;
    supportRequested : CommonSection;
    nextSteps : CommonSection;
  };

  type ContactInfo = {
    email : Text;
    phone : Text;
    address : Text;
    representative : Text;
  };

  type ContactFormInput = {
    name : Text;
    email : Text;
    message : Text;
    phoneNumber : Text;
    company : Text;
    position : Text;
    interestType : Text;
    department : Text;
  };

  type UserRole = {
    #admin;
    #user;
    #guest;
  };

  type User = {
    id : Text;
    name : Text;
    email : Text;
    role : UserRole;
  };

  type UserProfile = {
    name : Text;
  };

  var nextMessageId = 0;

  let users = Map.empty<Principal, User>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  let messageState = Map.empty<Text, CommonSection>();

  var heroSection : CommonSection = {
    sectionTitle = "Welcome to Rusy Biogas System";
    content = "Leading the way in sustainable organic waste management.";
    images = [];
  };

  var aboutCompany : CommonSection = {
    sectionTitle = "About Our Company";
    content = "Innovating in biogas technology to transform organic POME waste into valuable resources.";
    images = [];
  };

  var projectVision : CommonSection = {
    sectionTitle = "Project Vision";
    content = "To eliminate harmful POME disposal practices and provide affordable, renewable energy to rural communities.";
    images = [];
  };

  var whyRayagada : CommonSection = {
    sectionTitle = "Why Rayagada?";
    content = "A strategic location with abundant renewable organic waste feedstock, supporting local development.";
    images = [];
  };

  var technicalSpecs : CommonSection = {
    sectionTitle = "Technical Specifications";
    content = "State-of-the-art anaerobic digesters, gas storage tanks, and filtering systems.";
    images = [];
  };

  var financialOverview : CommonSection = {
    sectionTitle = "Financial Overview";
    content = "Comprehensive breakdown of projected costs, funding needs, and expected revenue streams.";
    images = [];
  };

  var socialImpact : CommonSection = {
    sectionTitle = "Social Impact";
    content = "Transforming local economies, improving public health, and creating sustainable jobs.";
    images = [];
  };

  var marketStrategy : CommonSection = {
    sectionTitle = "Market Strategy";
    content = "Targeted outreach to rural communities and industrial hotspots for maximum adoption.";
    images = [];
  };

  var valueChain : CommonSection = {
    sectionTitle = "Value Chain";
    content = "From waste collection to energy distribution, ensuring value capture at every stage.";
    images = [];
  };

  var supportRequested : CommonSection = {
    sectionTitle = "Support Requested";
    content = "Seeking Rs 22.5 Crores to fully realize the project's potential and drive sustainable change.";
    images = [];
  };

  var nextSteps : CommonSection = {
    sectionTitle = "Next Steps";
    content = "Detailed implementation plan and timelines for successful project execution.";
    images = [];
  };

  let contactInfo : ContactInfo = {
    email = "info@rusybiogas.com";
    phone = "+91 98765 43210";
    address = "123 Green Road, Rayagada, Odisha";
    representative = "Ananya Raj, Founder";
  };

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Public read access - no authorization needed
  public query ({ caller }) func getAllContent() : async ContentData {
    {
      hero = heroSection;
      aboutCompany;
      projectVision;
      whyRayagada;
      technicalSpecs;
      financialOverview;
      socialImpact;
      marketStrategy;
      valueChain;
      supportRequested;
      nextSteps;
    };
  };

  // Admin-only: Update all section content
  public shared ({ caller }) func updateSection(section : Text, content : CommonSection) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update sections");
    };

    if (section == "hero") {
      heroSection := content;
    } else if (section == "aboutCompany") {
      aboutCompany := content;
    } else if (section == "projectVision") {
      projectVision := content;
    } else if (section == "whyRayagada") {
      whyRayagada := content;
    } else if (section == "technicalSpecs") {
      technicalSpecs := content;
    } else if (section == "financialOverview") {
      financialOverview := content;
    } else if (section == "socialImpact") {
      socialImpact := content;
    } else if (section == "marketStrategy") {
      marketStrategy := content;
    } else if (section == "valueChain") {
      valueChain := content;
    } else if (section == "supportRequested") {
      supportRequested := content;
    } else if (section == "nextSteps") {
      nextSteps := content;
    } else {
      Runtime.trap("Unknown section: " # section);
    };
  };

  // Admin-only: Upload section images
  public shared ({ caller }) func uploadSectionImage(section : Text, image : Storage.ExternalBlob) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can upload images");
    };

    let updatedSection = switch (section) {
      case ("hero") { { heroSection with images = heroSection.images.concat([image]) } };
      case ("aboutCompany") { { aboutCompany with images = aboutCompany.images.concat([image]) } };
      case ("projectVision") { { projectVision with images = projectVision.images.concat([image]) } };
      case ("whyRayagada") { { whyRayagada with images = whyRayagada.images.concat([image]) } };
      case ("technicalSpecs") { { technicalSpecs with images = technicalSpecs.images.concat([image]) } };
      case ("financialOverview") {
        { financialOverview with images = financialOverview.images.concat([image]) };
      };
      case ("socialImpact") { { socialImpact with images = socialImpact.images.concat([image]) } };
      case ("marketStrategy") { { marketStrategy with images = marketStrategy.images.concat([image]) } };
      case ("valueChain") { { valueChain with images = valueChain.images.concat([image]) } };
      case ("supportRequested") {
        { supportRequested with images = supportRequested.images.concat([image]) };
      };
      case ("nextSteps") { { nextSteps with images = nextSteps.images.concat([image]) } };
      case (_) { Runtime.trap("Unknown section: " # section) };
    };

    switch (section) {
      case ("hero") { heroSection := updatedSection };
      case ("aboutCompany") { aboutCompany := updatedSection };
      case ("projectVision") { projectVision := updatedSection };
      case ("whyRayagada") { whyRayagada := updatedSection };
      case ("technicalSpecs") { technicalSpecs := updatedSection };
      case ("financialOverview") { financialOverview := updatedSection };
      case ("socialImpact") { socialImpact := updatedSection };
      case ("marketStrategy") { marketStrategy := updatedSection };
      case ("valueChain") { valueChain := updatedSection };
      case ("supportRequested") { supportRequested := updatedSection };
      case ("nextSteps") { nextSteps := updatedSection };
      case (_) { Runtime.trap("Unknown section: " # section) };
    };
  };

  // Public read access - no authorization needed
  public query ({ caller }) func getContactInfo() : async ContactInfo {
    contactInfo;
  };

  // Public: Anyone can submit contact form
  public shared ({ caller }) func submitContactForm(form : ContactFormInput) : async () {
    let id = nextMessageId;
    nextMessageId += 1;

    messageState.add(
      id.toText(),
      {
        sectionTitle = form.position;
        content = form.message;
        images = [];
      },
    );
  };

  // Public: Get unread messages count
  public query ({ caller }) func getUnreadMessagesCount() : async Nat {
    messageState.size();
  };
};
