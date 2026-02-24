import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Cog, TrendingUp } from 'lucide-react';

const NextSteps = () => {
  const phases = [
    {
      icon: Clock,
      title: 'Phase 1 — Commissioning',
      timeframe: '0–3 months',
      activities: [
        'Finalize land/site',
        'Complete machinery installation',
        'Initiate staff recruitment and hands-on training',
        'Secure PMFME subsidy disbursement and loan drawdown',
      ],
    },
    {
      icon: Cog,
      title: 'Phase 2 — Operationalization',
      timeframe: '3–9 months',
      activities: [
        'Begin regular procurement cycles from farmer members',
        'Achieve 70% capacity utilization targets',
        'Obtain institutional trial orders for ICDS/MDM',
        'Implement QA documentation and traceability',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Phase 3 — Scale & Consolidate',
      timeframe: '9–24 months',
      activities: [
        'Expand market reach across Odisha',
        'Introduce fortified SKUs',
        'Pursue certification',
        'Plan Phase II capacity uplift to 2–3 TPD based on demand and working capital performance',
      ],
    },
  ];

  return (
    <section id="nextsteps" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conclusion & Next Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              Three-Phase Implementation Roadmap
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card key={index} className="border-primary/20">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-center text-lg mb-2">
                      {phase.title}
                    </CardTitle>
                    <p className="text-center text-sm text-primary font-semibold">
                      {phase.timeframe}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start text-sm">
                          <span className="text-primary mr-2 flex-shrink-0">•</span>
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              "We are committed to making Rayagada a hub for millet value addition."
            </p>
            <p className="text-muted-foreground">
              Thank you for your time and partnership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
