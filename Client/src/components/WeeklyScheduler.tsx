import { Calendar, Plus, Check } from 'lucide-react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const scheduledDays = [0, 1, 2, 3, 4]; // Mon-Fri

const WeeklyScheduler = () => {
  return (
    <div className="stat-card p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <Calendar className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">Weekly Schedule</h3>
            <p className="text-xs text-muted-foreground">Recurring commute pattern</p>
          </div>
        </div>
        <button className="flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      <div className="flex justify-between gap-2">
        {days.map((day, index) => {
          const isScheduled = scheduledDays.includes(index);
          return (
            <button
              key={day}
              className={`flex-1 py-3 rounded-xl text-center transition-all ${
                isScheduled
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <span className="text-xs font-medium block">{day}</span>
              {isScheduled && <Check className="w-4 h-4 mx-auto mt-1" />}
            </button>
          );
        })}
      </div>

      <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Next scheduled ride</span>
          <span className="font-medium text-foreground">Tomorrow, 9:00 AM</span>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          Tech Park → Cyber Hub • 3 regular co-riders
        </div>
      </div>
    </div>
  );
};

export default WeeklyScheduler;
