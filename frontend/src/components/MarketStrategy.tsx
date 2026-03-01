import { useGetAllContent } from '../hooks/useQueries';

const MarketStrategy = () => {
  const { data: content } = useGetAllContent();

  // Default fallback content
  const defaultTitle = 'Market Strategy';
  const defaultContent = `Our multi-channel distribution strategy ensures sustainable growth:

B2G (Business to Government):
• Supply to Mid-Day Meal (MDM) scheme
• ICDS (Integrated Child Development Services)
• Public Distribution System (PDS)
• Government hospitals and institutions

B2B (Business to Business):
• Retail chains and supermarkets
• Organic food stores
• Bulk supply to food processors
• Export opportunities

B2C (Business to Consumer):
• Branded packaged products
• Direct farmer markets
• E-commerce platforms
• Community retail outlets

Sustainability Levers:
✓ Organic certification for premium markets
✓ Fair trade partnerships
✓ Value-added product development
✓ Strong brand identity rooted in tribal heritage`;

  const title = content?.marketStrategy?.sectionTitle || defaultTitle;
  const strategyContent = content?.marketStrategy?.content || defaultContent;

  return (
    <section id="market-strategy" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                {strategyContent}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <img
                src="/assets/generated/products-showcase.dim_800x500.png"
                alt="Product Showcase"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.warn('[MarketStrategy] Product showcase image failed to load');
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

export default MarketStrategy;
