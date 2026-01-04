import { MapPin, Clock, Users, ChevronRight } from "lucide-react";

export interface Ride {
  id: number;
  from_location: string;
  to_location: string;
  time: string;
  seats: number;
}

type Props = {
  rides: Ride[];
};

const UpcomingRides = ({ rides }: Props) => {
  return (
    <div className="stat-card p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">
          Upcoming Rides
        </h3>
        <button className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
          View all <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {rides.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No upcoming rides found
        </p>
      ) : (
        <div className="space-y-4">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="p-4 rounded-xl bg-muted/30 border border-border/50"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">
                  {ride.from_location} → {ride.to_location}
                </p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {ride.time}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                {ride.seats} seats available
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingRides;
