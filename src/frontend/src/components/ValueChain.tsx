import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ValueChain = () => {
  const stages = [
    {
      title: 'Aggregation',
      description: 'Farmer collection and scheduled procurement',
    },
    {
      title: 'Cleaning',
      description: 'Primary cleaning to reduce contamination',
    },
    {
      title: 'Processing',
      description: 'De-hulling, milling and roasting operations',
    },
    {
      title: 'Dispatch',
      description: 'Packaging, quality checks and delivery',
    },
  ];

  const kpis = [
    'Procurement coverage for 500 members',
    '≤5% post-harvest loss at the FPC level',
    'Product moisture ≤10%',
    'Institutional delivery lead time ≤7 days',
  ];

  return (
    <section id="valuechain" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Value Chain Process
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-End Workflow with Quality Control
            </p>
          </div>

          <div className="mb-12">
            <img
              src="/assets/generated/value-chain-diagram.dim_1000x600.png"
              alt="Value chain diagram"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stages.map((stage, index) => (
              <div key={index} className="flex items-center">
                <Card className="flex-1 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-bold text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                {index < stages.length - 1 && (
                  <ArrowRight className="hidden lg:block h-6 w-6 text-primary mx-2 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Operational KPI Targets (Year 1)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {kpis.map((kpi, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-card p-4 rounded-lg border border-border"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <p className="text-foreground">{kpi}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-card rounded-lg p-6 border border-border">
            <p className="text-muted-foreground leading-relaxed text-center">
              This diagram illustrates the end-to-end value chain and quality control 
              checkpoints. Integrated quality checks at multiple stages ensure compliance 
              with program specifications and reduce rejection risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
