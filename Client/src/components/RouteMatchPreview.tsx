import { Sparkles, Clock, Users } from "lucide-react";
import { Ride } from "./UpcomingRides";

type Props = {
  rides: Ride[];
};

const RouteMatchPreview = ({ rides }: Props) => {
  return (
    <div className="stat-card p-6 space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            AI Route Matches
          </h3>
          <p className="text-xs text-muted-foreground">
            Based on your commute
          </p>
        </div>
      </div>

      {rides.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No matches found
        </p>
      ) : (
        <div className="space-y-3">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="p-4 rounded-xl bg-muted/30 border border-border/50"
            >
              <p className="font-medium">
                {ride.from_location} → {ride.to_location}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {ride.time}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {ride.seats} seats
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RouteMatchPreview;
