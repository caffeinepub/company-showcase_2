import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const TechnicalSpecs = () => {
  const specifications = [
    {
      title: 'Pre-cleaning & Grading',
      description:
        'Multi-stage aspiration and sieving to remove dust, chaff and stones. Grading ensures consistent feedstock to downstream machines and improves finished product uniformity required for institutional procurement standards.',
    },
    {
      title: 'De-huller & Destoner',
      description:
        'Efficient de-hulling to preserve kernel integrity and reduce breakage. Integrated destoner ensures foreign material removal to meet hygiene and safety thresholds (visible foreign matter <0.5%).',
    },
    {
      title: 'Pulverizer (Flour & Pulverized Mixes)',
      description:
        'Variable gap pulverizer to produce coarse and fine flours (atta and maida equivalents for millet), enabling product SKUs such as Ragi flour, multi-millet atta, and fortified blends.',
    },
    {
      title: 'Roaster & Automatic Packaging',
      description:
        'Controlled roasting for aroma and anti-nutrient reduction, followed by automated weighing, pouch sealing and date-coding for traceability. Packaging options: 1 kg retail pouches and 25 kg institutional sacks.',
    },
  ];

  return (
    <section id="technical" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-muted-foreground">
              1 TPD Processing Design
            </p>
          </div>

          <div className="mb-12">
            <img
              src="/assets/generated/processing-equipment.dim_800x600.png"
              alt="Millet processing equipment"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {specifications.map((spec, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">{spec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-8" />

          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ancillary Systems & Expansion
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Ancillary systems include:</strong> Cold 
              storage room for finished goods, quality lab for moisture & microbial checks, 
              wastewater management and occupational safety systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Modular design:</strong> Layout designed 
              for modular expansion to 2–3 TPD in Phase II, allowing us to scale operations 
              based on demand and working capital performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
