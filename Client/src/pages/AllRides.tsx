import { useEffect, useState } from "react";
import API from "../services/api";
import DashboardSidebar, { MobileHeader } from "../components/DashboardSidebar";
import { MapPin, Clock, Users } from "lucide-react";

/* ---------- TYPES ---------- */
type Ride = {
  id: number;
  from_location: string;
  to_location: string;
  time: string;
  seats: number;
};

export default function AllRides() {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        setLoading(true);
        const res = await API.get("/rides/all");
        setRides(res.data);
      } catch (err) {
        console.error("Failed to fetch rides", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />

      <main className="lg:ml-64 p-6">
        <h1 className="text-2xl font-bold mb-6">🚗 All Available Rides</h1>

        {loading && <p>Loading rides...</p>}

        {!loading && rides.length === 0 && (
          <p className="text-muted-foreground">
            No rides available at the moment
          </p>
        )}

        <div className="grid gap-4">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="stat-card p-5 hover:border-primary/50 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>
                    <b>From:</b> {ride.from_location}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>
                    <b>To:</b> {ride.to_location}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  {ride.time}
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4" />
                  {ride.seats} seats available
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
