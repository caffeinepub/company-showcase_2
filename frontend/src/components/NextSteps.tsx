import { useGetAllContent } from '../hooks/useQueries';
import { Calendar, Rocket, TrendingUp } from 'lucide-react';

const NextSteps = () => {
  const { data: content } = useGetAllContent();

  // Default fallback content
  const defaultTitle = 'Conclusion & Next Steps';
  const defaultContent = `Implementation Timeline:

Phase 1: Commissioning (Months 1-6)
• Finalize land acquisition and site preparation
• Procure and install processing equipment
• Recruit and train staff
• Obtain all necessary licenses and certifications
• Establish farmer network and procurement systems

Phase 2: Operationalization (Months 7-12)
• Begin trial production runs
• Establish quality control protocols
• Launch initial product lines
• Secure government supply contracts
• Build retail distribution network

Phase 3: Scale & Consolidate (Year 2+)
• Achieve full capacity utilization
• Expand product portfolio
• Strengthen brand presence
• Explore export opportunities
• Replicate model in neighboring districts

We are committed to creating a sustainable, scalable model that transforms lives and strengthens food security in Rayagada and beyond.`;

  const title = content?.nextSteps?.sectionTitle || defaultTitle;
  const stepsContent = content?.nextSteps?.content || defaultContent;

  const phases = [
    {
      icon: Calendar,
      title: 'Phase 1: Commissioning',
      period: 'Months 1-6',
      color: 'text-blue-600',
    },
    {
      icon: Rocket,
      title: 'Phase 2: Operationalization',
      period: 'Months 7-12',
      color: 'text-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Phase 3: Scale & Consolidate',
      period: 'Year 2+',
      color: 'text-purple-600',
    },
  ];

  return (
    <section id="next-steps" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon className={`h-10 w-10 ${phase.color} mb-4`} />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {phase.period}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                {stepsContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
