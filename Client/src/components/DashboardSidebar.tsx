import { 
  LayoutDashboard, 
  MapPin, 
  Calendar, 
  Users, 
  Leaf, 
  Shield, 
  Settings, 
  LogOut,
  Bike,
  Menu,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavItem {
  icon: typeof LayoutDashboard;
  label: string;
  path: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: MapPin, label: 'Find Rides', path: '/find-rides', badge: '3' },
  { icon: Calendar, label: 'Schedule', path: '/schedule' },
  { icon: Users, label: 'My Pool', path: '/my-pool' },
  { icon: Leaf, label: 'Eco Impact', path: '/eco-impact' },
  { icon: Bike, label: 'Walk & Cycle', path: '/walk-cycle' },
  { icon: Shield, label: 'Safety', path: '/safety' },
];

const SidebarContent = ({ onClose }: { onClose?: () => void }) => {
  const location = useLocation();

  return (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-gradient-primary">RideGreen</h1>
              <p className="text-xs text-muted-foreground">Eco Carpooling</p>
            </div>
          </Link>
          {onClose && (
            <button onClick={onClose} className="lg:hidden p-2 rounded-lg hover:bg-sidebar-accent">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                  isActive 
                    ? 'bg-primary-foreground/20 text-primary-foreground' 
                    : 'bg-accent text-accent-foreground'
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-sidebar-accent mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-eco-forest flex items-center justify-center text-primary-foreground font-semibold">
            AS
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm text-sidebar-foreground truncate">Arjun Singh</p>
            <p className="text-xs text-muted-foreground truncate">arjun@company.com</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-lg hover:bg-muted">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72 bg-sidebar">
              <SidebarContent onClose={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-gradient-primary">RideGreen</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

const DashboardSidebar = () => {
  return (
    <aside className="hidden lg:flex w-64 h-screen bg-sidebar border-r border-sidebar-border flex-col fixed left-0 top-0">
      <SidebarContent />
    </aside>
  );
};

export default DashboardSidebar;
