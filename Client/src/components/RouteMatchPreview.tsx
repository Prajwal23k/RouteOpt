import { Sparkles, Clock, Users, TrendingDown } from 'lucide-react';

interface Match {
  id: string;
  name: string;
  avatar: string;
  matchScore: number;
  sharedDistance: string;
  timeSaved: string;
  co2Saved: string;
}

const mockMatches: Match[] = [
  {
    id: '1',
    name: 'Neha Sharma',
    avatar: '👩‍💻',
    matchScore: 95,
    sharedDistance: '12.5 km',
    timeSaved: '15 min',
    co2Saved: '2.1 kg',
  },
  {
    id: '2',
    name: 'Vikram Patel',
    avatar: '👨‍🔬',
    matchScore: 87,
    sharedDistance: '8.2 km',
    timeSaved: '10 min',
    co2Saved: '1.4 kg',
  },
  {
    id: '3',
    name: 'Ananya Das',
    avatar: '👩‍🎨',
    matchScore: 78,
    sharedDistance: '6.8 km',
    timeSaved: '8 min',
    co2Saved: '1.1 kg',
  },
];

const RouteMatchPreview = () => {
  return (
    <div className="stat-card p-6 space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">AI Route Matches</h3>
          <p className="text-xs text-muted-foreground">Based on your commute pattern</p>
        </div>
      </div>

      <div className="space-y-3">
        {mockMatches.map((match, index) => (
          <div
            key={match.id}
            className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all cursor-pointer group animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{match.avatar}</span>
                <div>
                  <p className="font-medium text-foreground">{match.name}</p>
                  <p className="text-xs text-muted-foreground">{match.sharedDistance} shared route</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{match.matchScore}%</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {match.timeSaved} saved
              </div>
              <div className="flex items-center gap-1 text-primary">
                <TrendingDown className="w-3.5 h-3.5" />
                {match.co2Saved} CO₂
              </div>
            </div>

            <button className="w-full mt-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Connect & Ride Together
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteMatchPreview;
