import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectVision = () => {
  const objectives = [
    {
      title: 'Assured Procurement',
      icon: '/assets/generated/procurement-icon.dim_200x200.png',
      description:
        'Provide transparent, timely procurement at fairer prices directly to 500+ FPC members, eliminating exploitative middlemen margins and stabilizing seasonal farmer incomes.',
    },
    {
      title: 'Post-harvest Loss Reduction',
      icon: '/assets/generated/loss-reduction-icon.dim_200x200.png',
      description:
        'Introduce primary and secondary processing (cleaning, dehulling, grading, roasting, and packaging) to reduce losses, improve shelf life, and increase marketable value.',
    },
    {
      title: 'Nutrition & Supply',
      icon: '/assets/generated/nutrition-icon.dim_200x200.png',
      description:
        'Manufacture high-quality millet products (Ragi flour, pulverized millet mixes) that meet procurement specifications for ICDS, Mid-Day Meals (MDM), and tribal hostels, improving local dietary diversity and micronutrient intake.',
    },
  ];

  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Project Vision & Core Objectives
            </h2>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                To create a sustainable, farmer-owned value chain in Rayagada that 
                retains value locally, increases incomes for tribal producers, and 
                supplies safe, nutrient-dense millet products to public nutrition 
                programs and markets across Odisha.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img
                      src={objective.icon}
                      alt={objective.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <CardTitle className="text-center text-xl">
                    {objective.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVision;
