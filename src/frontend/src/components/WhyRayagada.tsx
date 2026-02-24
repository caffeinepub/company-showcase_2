import { MapPin, TrendingUp, Users, Sprout } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyRayagada = () => {
  return (
    <section id="rayagada" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Rayagada?
            </h2>
            <p className="text-lg text-muted-foreground">
              Local Need and Strategic Opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4 mb-4">
                  <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Context & Production
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rayagada district is a leading producer of Ragi and other minor 
                      millets in Odisha. Small and marginal farmers—predominantly tribal 
                      households—cultivate these crops across fragmented plots.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4 mb-4">
                  <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Current Market Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Current market practices see raw grain sold to intermediaries for 
                      low margins; value is exported out of the district with minimal 
                      local beneficiation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 mb-12">
            <div className="flex items-start space-x-4">
              <Sprout className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Local Value Addition
                </h3>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  A local processing unit will keep value-add activities (cleaning, 
                  dehulling, milling, packaging) within Rayagada, raising farmgate 
                  returns, and enabling traceability and quality control for 
                  institutional buyers.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  By processing locally, we ensure that the economic benefits stay 
                  in the community, creating jobs and strengthening the local economy 
                  while maintaining the highest quality standards.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-start space-x-4">
              <Users className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Projected Social Impact
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Direct beneficiaries:</strong> 500+ 
                  registered farmer members. <strong className="text-foreground">Indirect 
                  reach:</strong> thousands of household consumers through ICDS/MDM 
                  procurement and retail channels.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The FPC model ensures profits are distributed to members, and governance 
                  remains farmer-centered.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Reduces dependence on middlemen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Strengthens farmer bargaining power and cash flows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Improves local nutrition through diversified millets products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRayagada;
