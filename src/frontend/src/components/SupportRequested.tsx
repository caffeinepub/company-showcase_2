import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCheck, Handshake, Building, Users } from 'lucide-react';

const SupportRequested = () => {
  const requests = [
    {
      number: '1',
      icon: FileCheck,
      title: 'Administrative Guidance',
      description:
        'Facilitate faster clearance and issue of necessary certificates for PMFME subsidy claim processing, and expedite verification visits required by the Ministry/implementing agency.',
    },
    {
      number: '2',
      icon: Handshake,
      title: 'Procurement Convergence',
      description:
        'Inclusion of Aparna Millets in district procurement lists for ICDS/MDM and tribal hostels; support in piloting direct procurement of milled products for a defined menu cycle.',
    },
    {
      number: '3',
      icon: Building,
      title: 'Land & Infrastructure Assistance',
      description:
        'Help identify an industrial shed / serviced land parcel near transport access, or provide support for clearances (environment, building, utilities) to accelerate project commissioning.',
    },
    {
      number: '4',
      icon: Users,
      title: 'Linkages & Capacity Building',
      description:
        'Facilitate introductions to state procurement officers, enable training collaborations for women workers through local skill centers, and support documentation for food safety certification.',
    },
  ];

  return (
    <section id="support" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Support Requested
            </h2>
            <p className="text-lg text-muted-foreground">
              From Collectorate & District Administration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {requests.map((request) => {
              const Icon = request.icon;
              return (
                <Card key={request.number} className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">
                          {request.number}
                        </span>
                      </div>
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{request.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {request.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              Request for District-Level Meeting
            </h3>
            <p className="text-foreground/90 leading-relaxed text-center max-w-3xl mx-auto">
              We request a district-level meeting to formalize timelines and designate 
              nodal officers to ensure PMFME subsidy disbursal and procurement trial 
              implementation within the next <strong>60–90 days</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportRequested;
