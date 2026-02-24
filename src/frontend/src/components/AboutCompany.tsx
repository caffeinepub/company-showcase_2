import { useGetAllContent } from '../hooks/useQueries';

const AboutCompany = () => {
  const { data: content, isError } = useGetAllContent();

  // Default fallback content
  const defaultTitle = 'About Our Company';
  const defaultContent = `Aparna Natural Millets Producer Company Limited is a farmer-owned cooperative dedicated to empowering tribal farmers in Rayagada, Odisha. We are establishing a 1 TPD (Tonne Per Day) millet processing unit to transform local agriculture and nutrition.

Our mission aligns with the Odisha Millets Mission (OMM) and the PM Formalization of Micro Food Processing Enterprises (PMFME) scheme, ensuring sustainable livelihoods for over 500 farmers while delivering nutritious millet products to families across the region.

By creating a complete value chain from farm to table, we're reducing post-harvest losses, ensuring fair prices for farmers, and making nutritious millets accessible to all.`;

  const title = content?.aboutCompany?.sectionTitle || defaultTitle;
  const aboutContent = content?.aboutCompany?.content || defaultContent;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/assets/generated/farmers-coop-icon.dim_200x200.png"
              alt="Farmers Cooperative"
              className="w-16 h-16 object-contain"
              onError={(e) => {
                console.warn('[AboutCompany] Icon failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
              {aboutContent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
