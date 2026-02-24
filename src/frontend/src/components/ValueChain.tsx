import { useGetAllContent } from '../hooks/useQueries';

const ValueChain = () => {
  const { data: content } = useGetAllContent();

  // Default fallback content
  const defaultTitle = 'Value Chain Process';
  const defaultContent = `End-to-End Workflow:

1. Procurement (Months 1-12)
   • Direct purchase from 500+ farmers
   • Quality assessment and grading
   • Fair price determination
   • Timely payment within 7 days

2. Processing (Year-round)
   • Cleaning and sorting
   • Dehulling and polishing
   • Milling and grinding
   • Quality control at each stage

3. Value Addition (Ongoing)
   • Flour production
   • Ready-to-cook mixes
   • Breakfast cereals
   • Traditional products

4. Distribution (Multi-channel)
   • Government institutions
   • Retail partnerships
   • Direct consumer sales
   • Export markets

Year 1 Operational KPIs:
• Raw material procurement: 300 tonnes
• Processing efficiency: 85%
• Product recovery rate: 90%
• Farmer satisfaction: 95%+
• On-time delivery: 98%`;

  const title = content?.valueChain?.sectionTitle || defaultTitle;
  const chainContent = content?.valueChain?.content || defaultContent;

  return (
    <section id="value-chain" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {title}
          </h2>

          <div className="mb-8">
            <img
              src="/assets/generated/value-chain-diagram.dim_1000x600.png"
              alt="Value Chain Diagram"
              className="w-full h-auto rounded-lg border border-border"
              onError={(e) => {
                console.warn('[ValueChain] Diagram image failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                {chainContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
