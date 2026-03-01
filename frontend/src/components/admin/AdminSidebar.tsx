import { Link } from '@tanstack/react-router';
import { 
  Home, 
  Info, 
  Target, 
  MapPin, 
  Settings, 
  DollarSign, 
  Users, 
  TrendingUp, 
  GitBranch,
  HelpCircle,
  ArrowRight,
  Mail
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminSidebarProps {
  currentSection: string;
}

export default function AdminSidebar({ currentSection }: AdminSidebarProps) {
  const sections = [
    {
      category: 'Company Info',
      items: [
        { id: 'hero', label: 'Hero Section', icon: Home },
        { id: 'about', label: 'About Company', icon: Info },
      ],
    },
    {
      category: 'Project Details',
      items: [
        { id: 'vision', label: 'Project Vision', icon: Target },
        { id: 'rayagada', label: 'Why Rayagada', icon: MapPin },
        { id: 'technical', label: 'Technical Specs', icon: Settings },
        { id: 'financial', label: 'Financial Overview', icon: DollarSign },
      ],
    },
    {
      category: 'Impact & Strategy',
      items: [
        { id: 'social', label: 'Social Impact', icon: Users },
        { id: 'market', label: 'Market Strategy', icon: TrendingUp },
        { id: 'valuechain', label: 'Value Chain', icon: GitBranch },
      ],
    },
    {
      category: 'Operations',
      items: [
        { id: 'support', label: 'Support Requested', icon: HelpCircle },
        { id: 'nextsteps', label: 'Next Steps', icon: ArrowRight },
      ],
    },
    {
      category: 'Contact',
      items: [
        { id: 'contact', label: 'Contact Info', icon: Mail },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border fixed left-0 top-[73px] bottom-0 overflow-y-auto">
      <nav className="p-4 space-y-6">
        {sections.map((section) => (
          <div key={section.category}>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
              {section.category}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                return (
                  <Link
                    key={item.id}
                    to={`/admin/${item.id}`}
                    className={cn(
                      'flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
