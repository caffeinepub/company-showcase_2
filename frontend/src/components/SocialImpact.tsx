import { useGetAllContent } from '../hooks/useQueries';
import { Users, Heart, Sprout } from 'lucide-react';

const SocialImpact = () => {
  const { data: content } = useGetAllContent();

  // Default fallback content
  const defaultTitle = 'Social & Economic Impact';
  const defaultContent = `Our project creates meaningful change across multiple dimensions:

Employment Generation:
• 15 direct jobs in processing, quality control, and administration
• 50+ indirect jobs in logistics, packaging, and distribution
• Priority employment for women and tribal youth

Farmer Livelihoods:
• 500+ farmers benefit from assured procurement
• 15-20% higher prices compared to market rates
• Timely payments and transparent pricing
• Technical training and support

Nutrition & Food Security:
• Supply to government schemes (MDM, ICDS, PDS)
• Affordable nutritious products for local communities
• Promotion of traditional food culture
• Improved dietary diversity`;

  const title = content?.socialImpact?.sectionTitle || defaultTitle;
  const impactContent = content?.socialImpact?.content || defaultContent;

  const impacts = [
    {
      icon: Users,
      title: 'Employment',
      value: '15+ Jobs',
      description: 'Direct employment opportunities',
    },
    {
      icon: Heart,
      title: 'Farmer Livelihoods',
      value: '500+ Farmers',
      description: 'Benefiting from assured procurement',
    },
    {
      icon: Sprout,
      title: 'Nutrition',
      value: 'Community Health',
      description: 'Improved food security and nutrition',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {impact.title}
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-2">
                    {impact.value}
                  </p>
                  <p className="text-muted-foreground">
                    {impact.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                {impactContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;
