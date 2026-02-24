import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Store, ShoppingBag } from 'lucide-react';

const MarketStrategy = () => {
  return (
    <section id="market" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Market Strategy
            </h2>
            <p className="text-lg text-muted-foreground">
              Long-Term Sustainability Through Diversified Channels
            </p>
          </div>

          <div className="mb-12">
            <img
              src="/assets/generated/products-showcase.dim_800x500.png"
              alt="Aparna Millets products"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Building2 className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center text-xl">
                  B2G — Institutional Offtake
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground block mb-2">Primary Channel</strong>
                  ICDS, Mid-Day Meals, Tribal Hostels and other government welfare 
                  programs in Rayagada and adjacent districts.
                </p>
                <p className="text-sm text-muted-foreground">
                  Aim for formal MOU and district-level procurement inclusion to 
                  ensure predictable institutional volumes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Store className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center text-xl">
                  B2B — Retail & Mission Outlets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground block mb-2">Bulk Supply</strong>
                  Supply to Odisha Millets Mission outlets, local retailers and 
                  cooperative stores.
                </p>
                <p className="text-sm text-muted-foreground">
                  Build bulk SKUs (25 kg) for institutional buyers and 1 kg retail 
                  SKUs for neighborhood retail.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <ShoppingBag className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center text-xl">
                  B2C — Brand 'Aparna Millets'
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground block mb-2">Consumer Brand</strong>
                  Launch consumer brand emphasizing provenance (Rayagada tribal millet), 
                  nutrition, and traceability.
                </p>
                <p className="text-sm text-muted-foreground">
                  Use local-language labelling, small-batch premium positioning, and 
                  targeted digital outreach in Odisha for urban health-conscious buyers.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Sustainability Levers
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  <strong className="text-foreground">Producer governance model (FPC):</strong> 
                  Ensures farmer-centric decision making and profit distribution
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  <strong className="text-foreground">Quality premiums:</strong> Through 
                  certification (hygiene, organic/identity preserved where possible)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  <strong className="text-foreground">Diversified channels:</strong> 
                  Institutional + retail reduces dependency on single buyer
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  <strong className="text-foreground">Scalable operations:</strong> 
                  2nd-phase capacity enhancement based on demand
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStrategy;
