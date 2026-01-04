import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Carbon from "./pages/Carbon";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import FindRides from "./pages/FindRides";
import Schedule from "./pages/Schedule";
import MyPool from "./pages/MyPool";
import EcoImpact from "./pages/EcoImpact";
import WalkCycle from "./pages/WalkCycle";
import Safety from "./pages/Safety";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/RequireAuth";
import CreateRide from "./pages/CreateRide";
import AllRides from "./pages/AllRides";
import SuggestedRides from "./pages/SuggestedRides";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Protected */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="/carbon" element={<Carbon />} />

          <Route path="/create-ride" element={<CreateRide />} />
          <Route path="/rides" element={<AllRides />} />
          <Route path="/suggested" element={<SuggestedRides />} />

          {/* Landing page */}
          <Route path="/" element={<Index />} />

          {/* Public pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

  


          <Route path="/find-rides" element={<FindRides />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/my-pool" element={<MyPool />} />
          <Route path="/eco-impact" element={<EcoImpact />} />
          <Route path="/walk-cycle" element={<WalkCycle />} />
          <Route path="/safety" element={<Safety />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;