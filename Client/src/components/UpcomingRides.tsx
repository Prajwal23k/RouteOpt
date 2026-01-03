import { MapPin, Clock, Users, ChevronRight } from 'lucide-react';

interface Ride {
  id: string;
  from: string;
  to: string;
  time: string;
  date: string;
  passengers: number;
  driver: {
    name: string;
    avatar: string;
  };
}

const mockRides: Ride[] = [
  {
    id: '1',
    from: 'Tech Park, Sector 62',
    to: 'Cyber Hub, Gurgaon',
    time: '09:00 AM',
    date: 'Today',
    passengers: 3,
    driver: { name: 'Rahul S.', avatar: '👨‍💼' },
  },
  {
    id: '2',
    from: 'Noida City Centre',
    to: 'Connaught Place',
    time: '06:30 PM',
    date: 'Today',
    passengers: 2,
    driver: { name: 'Priya M.', avatar: '👩‍💻' },
  },
  {
    id: '3',
    from: 'Sector 18 Metro',
    to: 'IIT Delhi',
    time: '08:00 AM',
    date: 'Tomorrow',
    passengers: 4,
    driver: { name: 'Amit K.', avatar: '👨‍🎓' },
  },
];

const UpcomingRides = () => {
  return (
    <div className="stat-card p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">Upcoming Rides</h3>
        <button className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
          View all <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {mockRides.map((ride) => (
          <div
            key={ride.id}
            className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{ride.driver.avatar}</span>
                <div>
                  <p className="font-medium text-foreground">{ride.driver.name}</p>
                  <p className="text-xs text-muted-foreground">{ride.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {ride.time}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground truncate">{ride.from}</span>
              </div>
              <div className="flex items-center gap-2 pl-0.5">
                <div className="w-0.5 h-4 bg-gradient-to-b from-primary to-accent ml-0.5" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground truncate">{ride.to}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                {ride.passengers} passengers
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Confirmed
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingRides;
