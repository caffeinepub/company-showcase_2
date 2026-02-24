import { Suspense } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutCompany from '../components/AboutCompany';
import ProjectVision from '../components/ProjectVision';
import WhyRayagada from '../components/WhyRayagada';
import TechnicalSpecs from '../components/TechnicalSpecs';
import FinancialOverview from '../components/FinancialOverview';
import SocialImpact from '../components/SocialImpact';
import MarketStrategy from '../components/MarketStrategy';
import ValueChain from '../components/ValueChain';
import SupportRequested from '../components/SupportRequested';
import NextSteps from '../components/NextSteps';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

export default function HomePage() {
  console.log('[HomePage] Rendering homepage');
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <AboutCompany />
          <ProjectVision />
          <WhyRayagada />
          <TechnicalSpecs />
          <FinancialOverview />
          <SocialImpact />
          <MarketStrategy />
          <ValueChain />
          <SupportRequested />
          <NextSteps />
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
