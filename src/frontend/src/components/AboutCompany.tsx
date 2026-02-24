import { Users, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutCompany = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Our Cooperative
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A farmer-owned cooperative designed to create sustainable value chains 
              and empower tribal communities in Rayagada, Odisha.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  src="/assets/generated/farmers-coop-icon.dim_200x200.png"
                  alt="Farmers cooperative"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Farmer-Owned Model
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aparna Natural Millets Producer Company Ltd. is a farmer-owned 
                  cooperative that puts control and profits directly in the hands 
                  of 500+ tribal farmer members. Our governance structure ensures 
                  that every decision benefits the community first.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Aligned with Government Schemes
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Our project directly aligns with the Odisha Millets Mission (OMM) 
                        and the Central PMFME scheme, ensuring policy support and 
                        institutional backing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Mission-Driven Impact
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        We are committed to empowering tribal farmers through fair 
                        procurement practices while enhancing nutrition for thousands 
                        of families through institutional supply programs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <p className="text-center text-foreground leading-relaxed max-w-4xl mx-auto">
              This compact, locally anchored processing unit is designed and promoted 
              by our Board of Directors to create a sustainable value chain for minor 
              millets. By keeping processing activities within Rayagada, we retain value 
              locally, raise farmgate returns, and enable traceability and quality control 
              for institutional buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
