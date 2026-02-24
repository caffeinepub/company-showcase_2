import { useGetAllContent } from '../hooks/useQueries';
import { FileText, Building2, Users2, Handshake } from 'lucide-react';

const SupportRequested = () => {
  const { data: content } = useGetAllContent();

  // Default fallback content
  const defaultTitle = 'Support Requested';
  const defaultContent = `We seek support from the Government of Odisha and Rayagada District Administration:

1. Administrative Guidance
   • Facilitation of PMFME scheme application
   • Support in obtaining necessary licenses and clearances
   • Coordination with relevant departments

2. Infrastructure Support
   • Land allocation for processing unit
   • Electricity connection at subsidized rates
   • Water supply and drainage facilities

3. Market Linkages
   • Inclusion in government procurement programs
   • Support for organic certification
   • Export promotion assistance

4. Financial Facilitation
   • Expedited processing of subsidy applications
   • Interest subvention on bank loans
   • Working capital support

We request a district-level meeting within 60-90 days to discuss implementation details and secure necessary approvals.`;

  const title = content?.supportRequested?.sectionTitle || defaultTitle;
  const supportContent = content?.supportRequested?.content || defaultContent;

  const supportAreas = [
    {
      icon: FileText,
      title: 'Administrative Guidance',
      description: 'Facilitation and approvals',
    },
    {
      icon: Building2,
      title: 'Infrastructure Support',
      description: 'Land and utilities',
    },
    {
      icon: Users2,
      title: 'Market Linkages',
      description: 'Government procurement',
    },
    {
      icon: Handshake,
      title: 'Financial Facilitation',
      description: 'Subsidies and loans',
    },
  ];

  return (
    <section id="support" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {title}
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {supportAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                {supportContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportRequested;
