import { useGetAllContent } from '../hooks/useQueries';

const WhyRayagada = () => {
  const { data: content } = useGetAllContent();

  // Default fallback content
  const defaultTitle = 'Why Rayagada?';
  const defaultContent = `Rayagada district in Odisha is a major millet-producing region with rich agricultural heritage. However, local farmers face significant challenges:

• Lack of local processing facilities forces farmers to sell raw produce at low prices
• Post-harvest losses due to inadequate storage and processing infrastructure
• Limited market access and price volatility
• Nutritious millets remain underutilized in local diets

By establishing a processing unit in Rayagada, we:
✓ Create local employment opportunities (15+ direct jobs)
✓ Ensure fair prices and assured procurement for 500+ farmers
✓ Reduce transportation costs and carbon footprint
✓ Strengthen the local economy and food security
✓ Make nutritious millet products accessible to the community`;

  const title = content?.whyRayagada?.sectionTitle || defaultTitle;
  const whyContent = content?.whyRayagada?.content || defaultContent;

  return (
    <section id="why-rayagada" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {title}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
              {whyContent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRayagada;
