import DashboardSidebar, { MobileHeader } from '@/components/DashboardSidebar';
import AIChatbot from '@/components/AIChatbot';
import { Users, Star, MapPin, MessageCircle, Phone, MoreVertical, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const poolMembers = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: 'PS',
    role: 'Pool Admin',
    company: 'Tech Corp',
    route: 'Sector 62 → Cyber Hub',
    ridesShared: 45,
    co2Saved: '68 kg',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Rahul Verma',
    avatar: 'RV',
    role: 'Member',
    company: 'StartupXYZ',
    route: 'Noida → Gurgaon',
    ridesShared: 32,
    co2Saved: '48 kg',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Neha Gupta',
    avatar: 'NG',
    role: 'Member',
    company: 'Tech Corp',
    route: 'Dwarka → Cyber Hub',
    ridesShared: 28,
    co2Saved: '42 kg',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Amit Kumar',
    avatar: 'AK',
    role: 'Member',
    company: 'FinanceHub',
    route: 'Vasant Kunj → CP',
    ridesShared: 21,
    co2Saved: '32 kg',
    rating: 4.6
  },
];

const MyPool = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />
      
      <main className="lg:ml-64 min-h-screen">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">My Pool</h1>
              <p className="text-sm text-muted-foreground">Your trusted carpool community</p>
            </div>
            <Button className="rounded-xl">
              <Users className="w-4 h-4 mr-2" />
              Invite Members
            </Button>
          </div>
        </header>

        <div className="p-4 lg:p-8 space-y-6">
          {/* Pool Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="stat-card p-5 text-center">
              <p className="text-3xl font-bold text-foreground">{poolMembers.length}</p>
              <p className="text-sm text-muted-foreground">Pool Members</p>
            </div>
            <div className="stat-card p-5 text-center">
              <p className="text-3xl font-bold text-foreground">126</p>
              <p className="text-sm text-muted-foreground">Total Rides</p>
            </div>
            <div className="stat-card p-5 text-center">
              <p className="text-3xl font-bold text-primary">190 kg</p>
              <p className="text-sm text-muted-foreground">CO₂ Saved</p>
            </div>
            <div className="stat-card p-5 text-center">
              <p className="text-3xl font-bold text-accent">₹18,500</p>
              <p className="text-sm text-muted-foreground">Money Saved</p>
            </div>
          </div>

          {/* Members List */}
          <div className="stat-card p-6">
            <h2 className="font-display font-semibold text-foreground mb-4">Pool Members</h2>
            
            <div className="space-y-4">
              {poolMembers.map((member) => (
                <div key={member.id} className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Avatar & Info */}
                    <div className="flex items-center gap-3 lg:w-56">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-eco-forest flex items-center justify-center text-primary-foreground font-semibold">
                        {member.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground">{member.name}</p>
                          {member.role === 'Pool Admin' && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Admin</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{member.company}</p>
                      </div>
                    </div>

                    {/* Route */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {member.route}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                      <div className="text-center">
                        <p className="font-semibold text-foreground">{member.ridesShared}</p>
                        <p className="text-xs text-muted-foreground">Rides</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-primary flex items-center gap-1">
                          <Leaf className="w-4 h-4" />
                          {member.co2Saved}
                        </p>
                        <p className="text-xs text-muted-foreground">Saved</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-medium">{member.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="rounded-lg w-9 h-9">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-lg w-9 h-9">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-lg w-9 h-9">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <AIChatbot />
    </div>
  );
};

export default MyPool;
