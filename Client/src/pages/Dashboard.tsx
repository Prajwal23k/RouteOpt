import DashboardSidebar, { MobileHeader } from '@/components/DashboardSidebar';
import StatsOverview from '@/components/StatsOverview';
import CarbonSavingsRing from '@/components/CarbonSavingsRing';
import QuickBooking from '@/components/QuickBooking';
import UpcomingRides from '@/components/UpcomingRides';
import SafetyTrigger from '@/components/SafetyTrigger';
import RouteMatchPreview from '@/components/RouteMatchPreview';
import WalkCyclePromo from '@/components/WalkCyclePromo';
import WeeklyScheduler from '@/components/WeeklyScheduler';
import AIChatbot from '@/components/AIChatbot';
import { Bell, Search } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />
      
      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Header - Desktop Only */}
        <header className="hidden lg:block sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground">Hello, {localStorage.getItem('userName') || 'Rider'}! 🌿</h1>
              <p className="text-sm text-muted-foreground">Let's make your commute greener today</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search rides, routes..."
                  className="w-64 pl-10 pr-4 py-2.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>
              <button className="relative w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                <Bell className="w-5 h-5 text-foreground" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-destructive" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 lg:p-8 space-y-6 lg:space-y-8">
          {/* Mobile Greeting */}
          <div className="lg:hidden">
            <h1 className="text-xl font-display font-bold text-foreground">Good Morning, {localStorage.getItem('userName') || 'Rider'}! 🌿</h1>
            <p className="text-sm text-muted-foreground">Let's make your commute greener today</p>
          </div>

          {/* Stats Overview */}
          <section className="animate-slide-up">
            <StatsOverview />
          </section>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Left Column - Carbon Savings & Quick Booking */}
            <div className="md:col-span-1 lg:col-span-4 space-y-4 lg:space-y-6">
              {/* Carbon Savings Card */}
              <div className="stat-card p-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Your Carbon Impact</h3>
                <div className="flex justify-center">
                  <CarbonSavingsRing savedKg={24.5} targetKg={50} />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">Monthly Target: 50 kg</p>
                  <p className="text-xs text-primary mt-1">You're in the top 15% of eco-commuters! 🌟</p>
                </div>
              </div>

              {/* Quick Booking */}
              <div className="animate-slide-up" style={{ animationDelay: '150ms' }}>
                <QuickBooking />
              </div>

              {/* Safety Trigger */}
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <SafetyTrigger />
              </div>
            </div>

            {/* Center Column - Upcoming Rides & Walk/Cycle */}
            <div className="md:col-span-1 lg:col-span-4 space-y-4 lg:space-y-6">
              <div className="animate-slide-up" style={{ animationDelay: '250ms' }}>
                <UpcomingRides />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <WalkCyclePromo />
              </div>
            </div>

            {/* Right Column - Route Matches & Schedule */}
            <div className="md:col-span-2 lg:col-span-4 space-y-4 lg:space-y-6">
              <div className="animate-slide-up" style={{ animationDelay: '350ms' }}>
                <RouteMatchPreview />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
                <WeeklyScheduler />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Dashboard;