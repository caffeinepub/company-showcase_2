import { useGetAllContent } from '../hooks/useQueries';

const ProjectVision = () => {
  const { data: content } = useGetAllContent();

  // Default fallback content
  const defaultTitle = 'Project Vision';
  const defaultContent = 'To create a sustainable, farmer-centric millet processing ecosystem that ensures fair prices, reduces waste, and delivers nutrition to communities.';

  const objectives = [
    {
      icon: '/assets/generated/procurement-icon.dim_200x200.png',
      title: 'Assured Procurement',
      description: 'Guaranteed market access for 500+ tribal farmers with fair pricing and timely payments.',
    },
    {
      icon: '/assets/generated/loss-reduction-icon.dim_200x200.png',
      title: 'Post-harvest Loss Reduction',
      description: 'Modern processing facilities to minimize waste and maximize value from every harvest.',
    },
    {
      icon: '/assets/generated/nutrition-icon.dim_200x200.png',
      title: 'Nutrition & Supply',
      description: 'Delivering high-quality, nutritious millet products to schools, hospitals, and households.',
    },
  ];

  const title = content?.projectVision?.sectionTitle || defaultTitle;
  const visionContent = content?.projectVision?.content || defaultContent;

  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {visionContent}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={objective.icon}
                  alt={objective.title}
                  className="w-16 h-16 object-contain mb-4"
                  onError={(e) => {
                    console.warn(`[ProjectVision] Icon ${index} failed to load`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {objective.title}
                </h3>
                <p className="text-muted-foreground">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVision;
