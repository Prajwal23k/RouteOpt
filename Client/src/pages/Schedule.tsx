import DashboardSidebar, { MobileHeader } from '@/components/DashboardSidebar';
import AIChatbot from '@/components/AIChatbot';
import { Calendar, Clock, MapPin, Plus, Repeat, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const scheduledRides = [
  { day: 'Mon', date: 6, rides: [{ time: '08:30 AM', route: 'Home → Office', type: 'carpool' }] },
  { day: 'Tue', date: 7, rides: [{ time: '08:30 AM', route: 'Home → Office', type: 'carpool' }] },
  { day: 'Wed', date: 8, rides: [] },
  { day: 'Thu', date: 9, rides: [{ time: '09:00 AM', route: 'Home → Office', type: 'cycle' }] },
  { day: 'Fri', date: 10, rides: [{ time: '08:30 AM', route: 'Home → Office', type: 'carpool' }] },
  { day: 'Sat', date: 11, rides: [] },
  { day: 'Sun', date: 12, rides: [] },
];

const recurringSchedules = [
  { name: 'Daily Commute', route: 'Sector 62 → Cyber Hub', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], time: '08:30 AM' },
  { name: 'Weekend Market', route: 'Home → Sarojini Nagar', days: ['Sat'], time: '10:00 AM' },
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />
      
      <main className="lg:ml-64 min-h-screen">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Schedule</h1>
              <p className="text-sm text-muted-foreground">Plan your recurring commutes</p>
            </div>
            <Button className="rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              Add Schedule
            </Button>
          </div>
        </header>

        <div className="p-4 lg:p-8 space-y-6">
          {/* Week View */}
          <div className="stat-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-semibold text-foreground flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                This Week
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-lg w-8 h-8">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm font-medium px-3">Jan 6 - 12, 2026</span>
                <Button variant="outline" size="icon" className="rounded-lg w-8 h-8">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {scheduledRides.map((day) => (
                <div
                  key={day.day}
                  className={`p-3 rounded-xl border transition-all ${
                    day.rides.length > 0
                      ? 'bg-primary/10 border-primary/30'
                      : 'bg-muted/50 border-border hover:border-primary/30'
                  }`}
                >
                  <p className="text-xs font-medium text-muted-foreground text-center">{day.day}</p>
                  <p className="text-lg font-semibold text-foreground text-center mb-2">{day.date}</p>
                  {day.rides.length > 0 ? (
                    day.rides.map((ride, i) => (
                      <div key={i} className="text-xs text-center">
                        <p className="text-primary font-medium">{ride.time}</p>
                        <p className="text-muted-foreground truncate">{ride.type}</p>
                      </div>
                    ))
                  ) : (
                    <button className="w-full py-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                      + Add
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recurring Schedules */}
          <div className="stat-card p-6">
            <h2 className="font-display font-semibold text-foreground flex items-center gap-2 mb-4">
              <Repeat className="w-5 h-5 text-primary" />
              Recurring Schedules
            </h2>

            <div className="space-y-4">
              {recurringSchedules.map((schedule, index) => (
                <div key={index} className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-foreground">{schedule.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        {schedule.route}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                          <span
                            key={d}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                              schedule.days.includes(d)
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {d.charAt(0)}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {schedule.time}
                      </div>
                      <Button variant="outline" size="sm" className="rounded-lg">
                        Edit
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

export default Schedule;
