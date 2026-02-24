import { useGetAllContent } from '../hooks/useQueries';
import { IndianRupee } from 'lucide-react';

const FinancialOverview = () => {
  const { data: content } = useGetAllContent();

  // Default fallback content
  const defaultTitle = 'Financial Overview';
  const defaultContent = `Total Project Cost: ₹1.15 Crore

Funding Sources:
• PMFME Scheme Grant: ₹35 Lakhs (30%)
• Bank Loan: ₹60 Lakhs (52%)
• Farmer Equity: ₹20 Lakhs (18%)

Year 1 Projections:
• Processing Capacity: 300 tonnes/year
• Revenue: ₹90 Lakhs
• Operating Expenses: ₹65 Lakhs
• Net Surplus: ₹25 Lakhs

Key Assumptions:
• Average procurement price: ₹40/kg
• Average selling price: ₹60/kg
• Capacity utilization: 80% in Year 1
• Break-even expected in 18 months`;

  const title = content?.financialOverview?.sectionTitle || defaultTitle;
  const financialContent = content?.financialOverview?.content || defaultContent;

  return (
    <section id="financial" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <IndianRupee className="h-10 w-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                {financialContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialOverview;
