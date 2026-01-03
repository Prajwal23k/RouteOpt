import { TrendingUp, Users, Route, Leaf } from 'lucide-react';

const stats = [
  {
    icon: Route,
    label: 'Rides Shared',
    value: '47',
    change: '+12 this week',
    positive: true,
  },
  {
    icon: Users,
    label: 'Carpool Partners',
    value: '23',
    change: '+5 new matches',
    positive: true,
  },
  {
    icon: Leaf,
    label: 'Trees Equivalent',
    value: '8',
    change: 'This month',
    positive: true,
  },
  {
    icon: TrendingUp,
    label: 'Money Saved',
    value: '₹4,200',
    change: '+₹800 this week',
    positive: true,
  },
];

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          <p className={`text-xs mt-2 ${stat.positive ? 'text-primary' : 'text-destructive'}`}>
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
