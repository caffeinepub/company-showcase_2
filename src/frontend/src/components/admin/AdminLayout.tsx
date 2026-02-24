import { useParams } from '@tanstack/react-router';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import HeroEditor from './editors/HeroEditor';
import AboutCompanyEditor from './editors/AboutCompanyEditor';
import ProjectVisionEditor from './editors/ProjectVisionEditor';
import WhyRayagadaEditor from './editors/WhyRayagadaEditor';
import TechnicalSpecsEditor from './editors/TechnicalSpecsEditor';
import FinancialOverviewEditor from './editors/FinancialOverviewEditor';
import SocialImpactEditor from './editors/SocialImpactEditor';
import MarketStrategyEditor from './editors/MarketStrategyEditor';
import ValueChainEditor from './editors/ValueChainEditor';
import SupportRequestedEditor from './editors/SupportRequestedEditor';
import NextStepsEditor from './editors/NextStepsEditor';
import ContactEditor from './editors/ContactEditor';

export default function AdminLayout() {
  const params = useParams({ strict: false });
  const section = (params as any)?.section || 'hero';

  const renderEditor = () => {
    switch (section) {
      case 'hero':
        return <HeroEditor />;
      case 'about':
        return <AboutCompanyEditor />;
      case 'vision':
        return <ProjectVisionEditor />;
      case 'rayagada':
        return <WhyRayagadaEditor />;
      case 'technical':
        return <TechnicalSpecsEditor />;
      case 'financial':
        return <FinancialOverviewEditor />;
      case 'social':
        return <SocialImpactEditor />;
      case 'market':
        return <MarketStrategyEditor />;
      case 'valuechain':
        return <ValueChainEditor />;
      case 'support':
        return <SupportRequestedEditor />;
      case 'nextsteps':
        return <NextStepsEditor />;
      case 'contact':
        return <ContactEditor />;
      default:
        return <HeroEditor />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar currentSection={section} />
        <main className="flex-1 p-6 lg:p-8 ml-64">
          <div className="max-w-5xl mx-auto">
            {renderEditor()}
          </div>
        </main>
      </div>
    </div>
  );
}
