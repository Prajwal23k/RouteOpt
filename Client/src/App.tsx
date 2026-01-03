import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import FindRides from "./pages/FindRides";
import Schedule from "./pages/Schedule";
import MyPool from "./pages/MyPool";
import EcoImpact from "./pages/EcoImpact";
import WalkCycle from "./pages/WalkCycle";
import Safety from "./pages/Safety";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
