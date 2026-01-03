import DashboardSidebar, { MobileHeader } from '@/components/DashboardSidebar';
import AIChatbot from '@/components/AIChatbot';
import { Bike, Footprints, MapPin, Clock, Leaf, TrendingUp, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const nearbyDestinations = [
  { name: 'Chai Point Cafe', distance: '0.5 km', walkTime: '6 min', cycleTime: '2 min', co2Saved: '0.12 kg' },
  { name: 'Sector 62 Metro', distance: '1.2 km', walkTime: '15 min', cycleTime: '5 min', co2Saved: '0.28 kg' },
  { name: 'Food Court', distance: '0.8 km', walkTime: '10 min', cycleTime: '3 min', co2Saved: '0.19 kg' },
  { name: 'ATM & Bank', distance: '0.3 km', walkTime: '4 min', cycleTime: '1 min', co2Saved: '0.07 kg' },
];

const stats = {
  totalWalkKm: 24.5,
  totalCycleKm: 18.2,
  calories: 1850,
  streak: 12,
};

const WalkCycle = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />
      
      <main className="lg:ml-64 min-h-screen">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 lg:px-8 py-4">
          <div>
            <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Walk & Cycle</h1>
            <p className="text-sm text-muted-foreground">Go green for short distances</p>
          </div>
        </header>

        <div className="p-4 lg:p-8 space-y-6">
          {/* Hero Banner */}
          <div className="stat-card p-6 bg-gradient-to-br from-eco-spring/20 to-eco-forest/10 border-primary/30">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-foreground">Zero Emission Mode</h2>
                  <p className="text-sm text-muted-foreground">Walk or cycle for destinations under 2km and save 100% emissions!</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="rounded-xl">
                  <Footprints className="w-4 h-4 mr-2" />
                  Log Walk
                </Button>
                <Button className="rounded-xl">
                  <Bike className="w-4 h-4 mr-2" />
                  Log Cycle
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="stat-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Footprints className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.totalWalkKm} km</p>
                  <p className="text-sm text-muted-foreground">Walked</p>
                </div>
              </div>
            </div>
            <div className="stat-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Bike className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.totalCycleKm} km</p>
                  <p className="text-sm text-muted-foreground">Cycled</p>
                </div>
              </div>
            </div>
            <div className="stat-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-warm-gold/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-warm-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.calories}</p>
                  <p className="text-sm text-muted-foreground">Calories Burned</p>
                </div>
              </div>
            </div>
            <div className="stat-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-eco-forest/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-eco-forest" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.streak} days</p>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Destinations */}
          <div className="stat-card p-6">
            <h2 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Nearby Destinations (Walk/Cycle Recommended)
            </h2>
            
            <div className="space-y-3">
              {nearbyDestinations.map((dest, index) => (
                <div key={index} className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-foreground">{dest.name}</h3>
                      <p className="text-sm text-muted-foreground">{dest.distance} away</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Footprints className="w-4 h-4" />
                        {dest.walkTime}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Bike className="w-4 h-4" />
                        {dest.cycleTime}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-primary">
                        <Leaf className="w-4 h-4" />
                        Save {dest.co2Saved}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-lg">
                          <Footprints className="w-4 h-4 mr-1" />
                          Walk
                        </Button>
                        <Button size="sm" className="rounded-lg">
                          <Bike className="w-4 h-4 mr-1" />
                          Cycle
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="stat-card p-6 bg-gradient-to-r from-eco-spring/10 to-transparent">
            <h2 className="font-display font-semibold text-foreground mb-3">💡 Eco Tips</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Walking 1 km saves approximately 0.21 kg of CO₂ compared to driving</li>
              <li>• Cycling is 10x more energy efficient than driving</li>
              <li>• Short trips under 2 km account for 25% of all car journeys - switch to walk/cycle!</li>
              <li>• Regular walking or cycling improves cardiovascular health and reduces stress</li>
            </ul>
          </div>
        </div>
      </main>

      <AIChatbot />
    </div>
  );
};

export default WalkCycle;
