import DashboardSidebar, { MobileHeader } from "@/components/DashboardSidebar";
import CarbonSavingsRing from "@/components/CarbonSavingsRing";
import UpcomingRides from "@/components/UpcomingRides";
import SafetyTrigger from "@/components/SafetyTrigger";
import RouteMatchPreview from "@/components/RouteMatchPreview";
import WalkCyclePromo from "@/components/WalkCyclePromo";
import WeeklyScheduler from "@/components/WeeklyScheduler";
import AIChatbot from "@/components/AIChatbot";
import { Bell, Plus, Car, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import API from "../services/api";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Carbon from "./Carbon";

/* ---------- TYPES ---------- */

type JwtUser = {
  id: number;
  role: string;
  iat: number;
  exp: number;
};

type Ride = {
  id: number;
  from_location: string;
  to_location: string;
  time: string;
  seats: number;
};

export default function StudentDashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState<JwtUser | null>(null);
  const [myRides, setMyRides] = useState<Ride[]>([]);
  const [suggestedRides, setSuggestedRides] = useState<Ride[]>([]);
  const [carbonSavedKg, setCarbonSavedKg] = useState(0);

  /* Decode JWT */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      setUser(jwtDecode<JwtUser>(token));
    } catch {
      console.error("Invalid token");
    }
  }, []);

  /* My rides */
  useEffect(() => {
    API.get("/rides/my").then(res => setMyRides(res.data));
  }, []);

  /* Suggested rides */
  useEffect(() => {
    API.get("/rides/suggested?destination=College&time=9:00 AM")
      .then(res => setSuggestedRides(res.data));
  }, []);

  /* Carbon savings */
  useEffect(() => {
    API.get("/rides/carbon?distance=10&people=3")
      .then(res =>
        setCarbonSavedKg(Number((res.data.saved / 1000).toFixed(1)))
      );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />

      <main className="lg:ml-64 min-h-screen">
        {/* HEADER */}
        <header className="hidden lg:block sticky top-0 z-40 bg-background/80 backdrop-blur border-b px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              Hello Rider 🌿
            </h1>

            <button className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
              <Bell />
            </button>
          </div>
        </header>

        <div className="p-6 space-y-8">

          {/* QUICK ACTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button onClick={() => navigate("/create-ride")} className="stat-card p-5 flex gap-3">
              <Plus /> Create Ride
            </button>

            <button onClick={() => navigate("/rides")} className="stat-card p-5 flex gap-3">
              <Car /> View Rides
            </button>

            <button onClick={() => navigate("/suggested")} className="stat-card p-5 flex gap-3">
              <Sparkles /> Suggested
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT */}
            <div className="lg:col-span-4 space-y-6">
              <Carbon />
              <SafetyTrigger />
            </div>

            {/* CENTER */}
            <div className="lg:col-span-4 space-y-6">
              <UpcomingRides rides={myRides} />
              <WalkCyclePromo />
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-4 space-y-6">
              <RouteMatchPreview rides={suggestedRides} />
              <WeeklyScheduler />
            </div>

          </div>
        </div>
      </main>

      <AIChatbot carbonSaved={carbonSavedKg.toString()} />
    </div>
  );
}
