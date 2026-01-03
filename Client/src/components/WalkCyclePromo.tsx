import { Bike, Footprints, Leaf, Sparkles } from 'lucide-react';

const WalkCyclePromo = () => {
  return (
    <div className="stat-card p-6 bg-gradient-to-br from-eco-sage via-card to-primary/5 border-primary/20">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
            <Bike className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">Go Zero Emission!</h3>
            <p className="text-xs text-muted-foreground">Short trip detected nearby</p>
          </div>
        </div>
        <Sparkles className="w-5 h-5 text-accent animate-pulse-soft" />
      </div>

      <div className="p-4 rounded-xl bg-card/80 border border-border mb-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">Distance to nearby destination</p>
            <p className="text-2xl font-display font-bold text-foreground">1.2 km</p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">Potential CO₂ saved</p>
            <p className="text-2xl font-display font-bold text-primary">0.4 kg</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium btn-primary">
          <Footprints className="w-5 h-5" />
          Walk (15 min)
        </button>
        <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all border border-accent/30">
          <Bike className="w-5 h-5" />
          Cycle (5 min)
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
        <Leaf className="w-4 h-4 text-primary" />
        <span>Walking 3 days/week = 1 tree planted monthly!</span>
      </div>
    </div>
  );
};

export default WalkCyclePromo;
