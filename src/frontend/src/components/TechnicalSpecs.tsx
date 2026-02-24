import { useGetAllContent } from '../hooks/useQueries';

const TechnicalSpecs = () => {
  const { data: content } = useGetAllContent();

  // Default fallback content
  const defaultTitle = 'Technical Specifications';
  const defaultContent = `Our 1 TPD (Tonne Per Day) millet processing unit features state-of-the-art equipment designed for efficiency and quality:

Key Components:
• Cleaning & Grading System: Advanced machinery to remove impurities and sort grains
• Dehulling & Polishing Unit: Precision equipment for optimal grain processing
• Milling & Grinding System: High-capacity mills for flour and value-added products
• Packaging Line: Automated packaging for hygiene and shelf-life

Ancillary Systems:
• Quality Control Laboratory
• Cold Storage Facility (50 MT capacity)
• Raw Material Storage (100 MT capacity)
• Finished Goods Warehouse

The facility is designed to process multiple millet varieties including finger millet (ragi), pearl millet (bajra), foxtail millet, and little millet, ensuring year-round operations and diverse product offerings.`;

  const title = content?.technicalSpecs?.sectionTitle || defaultTitle;
  const specsContent = content?.technicalSpecs?.content || defaultContent;

  return (
    <section id="technical-specs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                {specsContent}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <img
                src="/assets/generated/processing-equipment.dim_800x600.png"
                alt="Processing Equipment"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.warn('[TechnicalSpecs] Equipment image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
