import { useState } from "react";
import API from "../services/api";
import { MapPin, Clock, Users, Search } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { MobileHeader } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";

export default function SuggestedRides() {
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(false);


  const search = async () => {
  try {
    setLoading(true);
    const res = await API.get(
      `/rides/suggested?destination=${destination}&time=${time}`
    );
    setRides(res.data);
  } catch (err) {
    console.error("Error fetching suggested rides", err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />

      <main className="lg:ml-64 p-6">
        <h1 className="text-2xl font-bold mb-6">
          🤖 AI Suggested Rides
        </h1>

        {/* SEARCH FORM */}
        <div className="max-w-md space-y-4 mb-8">
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Time (9:15 AM)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <Button
            onClick={search}
            className="w-full flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            {loading ? "Finding..." : "Find Carpools"}
          </Button>
        </div>

        {/* RESULTS */}
        <div className="space-y-4">
          {rides.length === 0 && !loading && (
            <p className="text-muted-foreground">
              No suggested rides yet
            </p>
          )}

          {rides.map((ride) => (
            <div
              key={ride.id}
              className="stat-card p-5 border border-green-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>
                      {ride.from_location} → {destination}
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

                <div className="text-green-700 font-semibold">
                  Suggested Match
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
