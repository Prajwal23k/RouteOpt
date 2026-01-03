import DashboardSidebar, { MobileHeader } from '@/components/DashboardSidebar';
import AIChatbot from '@/components/AIChatbot';
import SafetyTrigger from '@/components/SafetyTrigger';
import { Shield, Phone, MapPin, Users, Bell, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const emergencyContacts = [
  { name: 'Emergency Services', number: '112', type: 'emergency' },
  { name: 'Women Helpline', number: '181', type: 'emergency' },
  { name: 'Mom', number: '+91 98765 43210', type: 'personal' },
  { name: 'Office Security', number: '+91 11 2345 6789', type: 'work' },
];

const recentRides = [
  { date: 'Today', time: '08:30 AM', route: 'Sector 62 → Cyber Hub', status: 'safe', sharedWith: 2 },
  { date: 'Yesterday', time: '06:45 PM', route: 'Cyber Hub → Sector 62', status: 'safe', sharedWith: 1 },
  { date: 'Jan 2', time: '08:30 AM', route: 'Sector 62 → Cyber Hub', status: 'safe', sharedWith: 3 },
];

const Safety = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />
      
      <main className="lg:ml-64 min-h-screen">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Safety Center</h1>
              <p className="text-sm text-muted-foreground">Your security is our priority</p>
            </div>
            <Button variant="destructive" className="rounded-xl">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency SOS
            </Button>
          </div>
        </header>

        <div className="p-4 lg:p-8 space-y-6">
          {/* Safety Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Live Safety Trigger */}
            <SafetyTrigger />

            {/* Quick Actions */}
            <div className="stat-card p-6">
              <h2 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Safety Features
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">Verified Co-Riders Only</p>
                    <p className="text-xs text-muted-foreground">Only organization-verified users</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Active</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">Live Location Sharing</p>
                    <p className="text-xs text-muted-foreground">Auto-share with trusted contacts</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Active</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">Ride Recording</p>
                    <p className="text-xs text-muted-foreground">All rides are logged securely</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Active</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">Check-in Reminders</p>
                    <p className="text-xs text-muted-foreground">Get prompted to confirm safety</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg text-xs">Enable</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="stat-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-semibold text-foreground flex items-center gap-2">
                <Phone className="w-5 h-5 text-destructive" />
                Emergency Contacts
              </h2>
              <Button variant="outline" size="sm" className="rounded-lg">
                Add Contact
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className={`p-4 rounded-xl border ${
                  contact.type === 'emergency' 
                    ? 'bg-destructive/10 border-destructive/30' 
                    : 'bg-muted/50 border-border'
                }`}>
                  <p className="font-medium text-foreground">{contact.name}</p>
                  <p className="text-sm text-muted-foreground mb-3">{contact.number}</p>
                  <Button 
                    size="sm" 
                    variant={contact.type === 'emergency' ? 'destructive' : 'outline'}
                    className="w-full rounded-lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Ride History */}
          <div className="stat-card p-6">
            <h2 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Recent Ride History
            </h2>
            
            <div className="space-y-3">
              {recentRides.map((ride, index) => (
                <div key={index} className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{ride.route}</p>
                        <p className="text-sm text-muted-foreground">{ride.date} at {ride.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        Shared with {ride.sharedWith}
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary capitalize">
                        {ride.status}
                      </span>
                      <Button variant="ghost" size="sm" className="rounded-lg text-xs">
                        View Details
                      </Button>
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

export default Safety;
