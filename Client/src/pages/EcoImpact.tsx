import DashboardSidebar, { MobileHeader } from '@/components/DashboardSidebar';
import AIChatbot from '@/components/AIChatbot';
import CarbonSavingsRing from '@/components/CarbonSavingsRing';
import { Leaf, TrendingUp, TreePine, Droplets, Award, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const monthlyData = [
  { month: 'Jul', saved: 18 },
  { month: 'Aug', saved: 22 },
  { month: 'Sep', saved: 19 },
  { month: 'Oct', saved: 25 },
  { month: 'Nov', saved: 28 },
  { month: 'Dec', saved: 24.5 },
];

const weeklyBreakdown = [
  { day: 'Mon', carpool: 1.2, walk: 0.3, cycle: 0.5 },
  { day: 'Tue', carpool: 1.0, walk: 0.2, cycle: 0.6 },
  { day: 'Wed', carpool: 0, walk: 0.5, cycle: 0.8 },
  { day: 'Thu', carpool: 1.3, walk: 0.3, cycle: 0.4 },
  { day: 'Fri', carpool: 1.1, walk: 0.4, cycle: 0.5 },
];

const achievements = [
  { icon: TreePine, title: 'Tree Planter', desc: 'Saved equivalent of 3 trees', achieved: true },
  { icon: Droplets, title: 'Fuel Saver', desc: 'Saved 50L of fuel', achieved: true },
  { icon: Award, title: 'Eco Champion', desc: 'Top 10% of users', achieved: true },
  { icon: Leaf, title: 'Carbon Neutral', desc: 'Offset 100kg CO₂', achieved: false },
];

const EcoImpact = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />
      
      <main className="lg:ml-64 min-h-screen">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 lg:px-8 py-4">
          <div>
            <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Eco Impact</h1>
            <p className="text-sm text-muted-foreground">Track your environmental contribution</p>
          </div>
        </header>

        <div className="p-4 lg:p-8 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="stat-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">136.5 kg</p>
                  <p className="text-sm text-muted-foreground">Total CO₂ Saved</p>
                </div>
              </div>
            </div>
            <div className="stat-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-eco-forest/20 flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-eco-forest" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">6</p>
                  <p className="text-sm text-muted-foreground">Trees Equivalent</p>
                </div>
              </div>
            </div>
            <div className="stat-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">85L</p>
                  <p className="text-sm text-muted-foreground">Fuel Saved</p>
                </div>
              </div>
            </div>
            <div className="stat-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-warm-gold/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-warm-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Top 15%</p>
                  <p className="text-sm text-muted-foreground">Eco Ranking</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Monthly Trend */}
            <div className="lg:col-span-2 stat-card p-6">
              <h2 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Monthly CO₂ Savings Trend
              </h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyData}>
                    <defs>
                      <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Area type="monotone" dataKey="saved" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorSaved)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Current Month Ring */}
            <div className="stat-card p-6">
              <h2 className="font-display font-semibold text-foreground mb-4">This Month</h2>
              <div className="flex justify-center">
                <CarbonSavingsRing savedKg={24.5} targetKg={50} />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">Target: 50 kg CO₂</p>
                <p className="text-xs text-primary mt-1">49% of goal achieved</p>
              </div>
            </div>
          </div>

          {/* Weekly Breakdown */}
          <div className="stat-card p-6">
            <h2 className="font-display font-semibold text-foreground mb-4">Weekly Breakdown by Activity</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="carpool" stackId="a" fill="hsl(var(--primary))" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="walk" stackId="a" fill="hsl(var(--accent))" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="cycle" stackId="a" fill="hsl(152, 60%, 40%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-primary" />
                <span className="text-sm text-muted-foreground">Carpool</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-accent" />
                <span className="text-sm text-muted-foreground">Walk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'hsl(152, 60%, 40%)' }} />
                <span className="text-sm text-muted-foreground">Cycle</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="stat-card p-6">
            <h2 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Achievements
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((badge, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    badge.achieved
                      ? 'bg-primary/10 border-primary/30'
                      : 'bg-muted/50 border-border opacity-60'
                  }`}
                >
                  <badge.icon className={`w-8 h-8 mx-auto mb-2 ${badge.achieved ? 'text-primary' : 'text-muted-foreground'}`} />
                  <p className="font-medium text-sm text-foreground">{badge.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{badge.desc}</p>
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

export default EcoImpact;
