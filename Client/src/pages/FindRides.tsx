import DashboardSidebar, { MobileHeader } from '@/components/DashboardSidebar';
import AIChatbot from '@/components/AIChatbot';
import { Search, MapPin, Clock, Users, Filter, Star, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const availableRides = [
  {
    id: 1,
    driver: 'Priya Sharma',
    avatar: 'PS',
    rating: 4.8,
    from: 'Sector 62, Noida',
    to: 'Cyber Hub, Gurgaon',
    time: '08:30 AM',
    date: 'Tomorrow',
    seats: 2,
    price: 150,
    co2Saved: '2.3 kg',
    matchScore: 92
  },
  {
    id: 2,
    driver: 'Rahul Verma',
    avatar: 'RV',
    rating: 4.9,
    from: 'Vasant Kunj',
    to: 'Connaught Place',
    time: '09:00 AM',
    date: 'Tomorrow',
    seats: 3,
    price: 120,
    co2Saved: '1.8 kg',
    matchScore: 87
  },
  {
    id: 3,
    driver: 'Anita Das',
    avatar: 'AD',
    rating: 4.7,
    from: 'Dwarka Sector 21',
    to: 'Aerocity',
    time: '07:45 AM',
    date: 'Jan 5',
    seats: 1,
    price: 100,
    co2Saved: '1.5 kg',
    matchScore: 78
  },
];

const FindRides = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />
      
      <main className="lg:ml-64 min-h-screen">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Find Rides</h1>
              <p className="text-sm text-muted-foreground">Discover eco-friendly carpools near you</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by route..."
                  className="w-full lg:w-64 pl-10 pr-4 py-2.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>
              <Button variant="outline" size="icon" className="rounded-xl">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-8 space-y-6">
          {/* Search Form */}
          <div className="stat-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  <input
                    type="text"
                    placeholder="Pickup location"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border focus:border-primary outline-none text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                  <input
                    type="text"
                    placeholder="Drop-off location"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border focus:border-primary outline-none text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary outline-none text-sm"
                />
              </div>
              <div className="flex items-end">
                <Button className="w-full py-3 rounded-xl">
                  <Search className="w-4 h-4 mr-2" />
                  Search Rides
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-foreground">Available Rides</h2>
              <span className="text-sm text-muted-foreground">{availableRides.length} rides found</span>
            </div>

            <div className="grid gap-4">
              {availableRides.map((ride) => (
                <div key={ride.id} className="stat-card p-5 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Driver Info */}
                    <div className="flex items-center gap-3 lg:w-48">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-eco-forest flex items-center justify-center text-primary-foreground font-semibold">
                        {ride.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{ride.driver}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          {ride.rating}
                        </div>
                      </div>
                    </div>

                    {/* Route */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-foreground">{ride.from}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm text-foreground">{ride.to}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {ride.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {ride.seats} seats
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-primary">
                        <Leaf className="w-4 h-4" />
                        {ride.co2Saved}
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">₹{ride.price}</p>
                        <p className="text-xs text-primary">{ride.matchScore}% match</p>
                      </div>
                      <Button className="rounded-xl">Join Ride</Button>
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

export default FindRides;
