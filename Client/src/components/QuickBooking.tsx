import { useState } from 'react';
import { MapPin, Calendar, Clock, Users, Zap } from 'lucide-react';

const QuickBooking = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="stat-card p-6 space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">Quick Book</h3>
      </div>

      <div className="space-y-4">
        {/* Pickup Location */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
          <input
            type="text"
            placeholder="Pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Route Line */}
        <div className="flex items-center pl-5">
          <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
        </div>

        {/* Dropoff Location */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent" />
          <input
            type="text"
            placeholder="Drop-off location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
            />
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
            />
          </div>
        </div>

        <button className="w-full py-3.5 rounded-xl btn-primary font-semibold flex items-center justify-center gap-2">
          <Users className="w-5 h-5" />
          Find Matches
        </button>
      </div>
    </div>
  );
};

export default QuickBooking;
