import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianRupee, TrendingUp, PiggyBank } from 'lucide-react';

const FinancialOverview = () => {
  return (
    <section id="financial" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Financial Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              Costs, Funding & Projections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-primary/20 bg-card">
              <CardHeader>
                <div className="flex items-center justify-center mb-2">
                  <IndianRupee className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center text-lg">
                  Total Project Cost
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-center text-primary mb-3">
                  ₹1.15 Crore
                </p>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Capital expenditure for machinery, civil works, packaging line, 
                  QC lab, initial working capital, and start-up operational expenses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card">
              <CardHeader>
                <div className="flex items-center justify-center mb-2">
                  <PiggyBank className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center text-lg">
                  Means of Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Bank Loan:</span>
                    <span className="font-semibold text-foreground">₹70.00 Lakhs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Promoter:</span>
                    <span className="font-semibold text-foreground">₹4.75 Lakhs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">PMFME (35%):</span>
                    <span className="font-semibold text-foreground">₹40.25 Lakhs</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Sanction application submitted; residual gap managed through 
                  working capital facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card">
              <CardHeader>
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center text-lg">
                  Year 1 Projections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Revenue:</p>
                    <p className="text-2xl font-bold text-foreground">₹1.50 Crore</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Net Profit:</p>
                    <p className="text-2xl font-bold text-primary">₹35 Lakhs</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Based on institutional off-take + B2B/B2C sales mix
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Key Financial Assumptions
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>70% capacity utilization in Year 1</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Average realization per kg aligned to market-linked rates</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  Institutional contract premiums for meeting quality/packaging standards
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Conservative raw material price escalation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  Healthy return and cash flow for debt servicing after operating expenses, 
                  depreciation and interest
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialOverview;
