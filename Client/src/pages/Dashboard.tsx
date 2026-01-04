import DashboardSidebar, { MobileHeader } from "@/components/DashboardSidebar";
import StatsOverview from "@/components/StatsOverview";
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
import { getUserRole } from "../utils/auth";
// import StudentDashboard from "./StudentDashboard";
// import AdminDashboard from "./AdminDashboard";

/* ---------------- TYPES ---------------- */

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

/* ---------------- COMPONENT ---------------- */

export default function Dashboard() {
  const navigate = useNavigate();

  const [authStatus, setAuthStatus] = useState("");
  const [user, setUser] = useState<JwtUser | null>(null);
  const [myRides, setMyRides] = useState<Ride[]>([]);
  const [suggestedRides, setSuggestedRides] = useState<Ride[]>([]);
  const [carbonSavedKg, setCarbonSavedKg] = useState(0);

  /* Decode JWT */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = jwtDecode<JwtUser>(token);
      setUser(decoded);
    } catch {
      console.error("Invalid token");
    }
  }, []);

  /* Verify auth */
  useEffect(() => {
    API.get("/protected")
      .then((res) => setAuthStatus(res.data.message))
      .catch(() => setAuthStatus("Unauthorized"));
  }, []);

  /* My rides */
  useEffect(() => {
    API.get("/rides/my")
      .then((res) => setMyRides(res.data))
      .catch(() => { });
  }, []);

  /* Suggested rides */
  useEffect(() => {
    API.get("/rides/suggested?destination=College&time=9:00 AM")
      .then((res) => setSuggestedRides(res.data))
      .catch(() => { });
  }, []);

  /* Carbon savings */
  useEffect(() => {
    API.get("/rides/carbon?distance=10&people=3")
      .then((res) =>
        setCarbonSavedKg(Number((res.data.saved / 1000).toFixed(1)))
      )
      .catch(() => { });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />

      <main className="lg:ml-64 min-h-screen">
        {/* HEADER */}
        <header className="hidden lg:block sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold">
                Hello, {user?.role || "Rider"} 🌿
              </h1>
              <p className="text-sm text-muted-foreground">
                {authStatus === "You are authorized"
                  ? "Your green commute dashboard"
                  : "Authentication required"}
              </p>
            </div>

            <button className="relative w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <div className="p-4 lg:p-8 space-y-8">

          {/* QUICK ACTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => navigate("/create-ride")}
              className="stat-card p-5 flex items-center gap-3 hover:scale-[1.02] transition"
            >
              <Plus className="text-primary" />
              <div>
                <p className="font-semibold">Create Ride</p>
                <p className="text-xs text-muted-foreground">
                  Offer a carpool
                </p>
              </div>
            </button>

            <button
              onClick={() => navigate("/rides")}
              className="stat-card p-5 flex items-center gap-3 hover:scale-[1.02] transition"
            >
              <Car className="text-primary" />
              <div>
                <p className="font-semibold">View All Rides</p>
                <p className="text-xs text-muted-foreground">
                  Explore carpools
                </p>
              </div>
            </button>

            <button
              onClick={() => navigate("/suggested")}
              className="stat-card p-5 flex items-center gap-3 hover:scale-[1.02] transition"
            >
              <Sparkles className="text-primary" />
              <div>
                <p className="font-semibold">Suggested Rides</p>
                <p className="text-xs text-muted-foreground">
                  Smart matching
                </p>
              </div>
            </button>
          </div>

          {/* ADMIN STATS */}
          {user?.role === "admin" && <StatsOverview />}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* LEFT */}
            <div className="lg:col-span-4 space-y-6">
              {/* <div className="stat-card p-6"> */}
                {/* <h3 className="font-semibold mb-4">Your Carbon Impact</h3>
                <CarbonSavingsRing savedKg={carbonSavedKg} targetKg={50} /> */}
                {/* <p className="text-xs text-primary mt-3 text-center">
                  Saving {carbonSavedKg} kg CO₂ 🌍
                </p> */}
              {/* </div> */}

              {/* 👇 NEW CARBON CALCULATOR */}
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

      {/* AI CHATBOT */}
      <AIChatbot carbonSaved={carbonSavedKg.toString()} />
    </div>
  );
}
