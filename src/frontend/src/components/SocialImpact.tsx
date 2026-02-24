import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, TrendingUp, Heart } from 'lucide-react';

const SocialImpact = () => {
  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Social & Economic Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Jobs, Livelihoods & Nutrition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Briefcase className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center text-xl">
                  Employment & Inclusion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed mb-4">
                  <strong className="text-foreground text-2xl block mb-2">15 Direct Jobs</strong>
                  Prioritized for local tribal youth and women in operations, quality 
                  control, packaging, and logistics.
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  Indirect employment through procurement aggregation, transport, 
                  and retail distribution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center text-xl">
                  Farmer Livelihoods & Income
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed mb-4">
                  <strong className="text-foreground text-2xl block mb-2">500+ Farmers</strong>
                  Increased farmer incomes through assured procurement, price 
                  stabilization and farmer-centric profit distribution.
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  Expected uplift in household income, improved cash flows during 
                  lean seasons, and stronger community resilience to price shocks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center text-xl">
                  Nutrition & Food Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed mb-4">
                  <strong className="text-foreground text-2xl block mb-2">
                    Thousands Reached
                  </strong>
                  Supplying hygienic, milled millet products to ICDS and MDM supports 
                  nutrition goals.
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  More bioavailable micronutrients, lower contamination risk, and 
                  culturally acceptable foods for tribal diets. Targeted supply of 
                  fortified Ragi flour can address anemia and child nutrition indicators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;
