import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGetAllContent } from '../hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';

const Hero = () => {
  const { data: content, isLoading, isError } = useGetAllContent();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Default content as fallback
  const defaultTitle = 'Welcome to Aparna Millets';
  const defaultTagline = 'Powered by Farmers. Trusted by Families.';
  const defaultContent = 'Join the Millet Revolution for sustainable food processing. At Aparna Millets, we are pioneering tasty distributes of healthcare-certified millet products and supporting smallholders with sustainable trade, contract farming, and value-adding processing.';
  const defaultDescription = 'Empowering Tribal Farmers & Enhancing Nutrition in Rayagada — a compact, farmer-owned millet processing unit aligned with the Odisha Millets Mission and PMFME scheme.';

  // Use backend content if available, otherwise use defaults
  const title = content?.hero?.sectionTitle || defaultTitle;
  const heroContent = content?.hero?.content || defaultContent;

  if (isLoading) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-bg.dim_1920x800.png"
            alt="Millet fields in Rayagada"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </section>
    );
  }

  // Render with default content even if there's an error
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x800.png"
          alt="Millet fields in Rayagada"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.warn('[Hero] Background image failed to load');
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-primary font-semibold text-lg md:text-xl mb-2 tracking-wide">
              {defaultTagline}
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {heroContent}
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-10 max-w-3xl mx-auto">
            {defaultDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
