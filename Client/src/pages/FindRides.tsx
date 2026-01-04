import { useEffect, useState } from "react";
import DashboardSidebar, { MobileHeader } from "@/components/DashboardSidebar";
import AIChatbot from "@/components/AIChatbot";
import { Search, MapPin, Clock, Users, Filter, Star, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import API from "../services/api";

/* ================= COMPONENT ================= */

const FindRides = () => {
  // 🔹 rides from backend
  const [availableRides, setAvailableRides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 payment states
  const [showPayment, setShowPayment] = useState(false);
  const [selectedRide, setSelectedRide] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] =
    useState<"upi" | "card" | "cash">("upi");
  const [upiApp, setUpiApp] =
    useState<"gpay" | "phonepe" | "paytm">("gpay");

  /* ================= FETCH RIDES ================= */

  useEffect(() => {
    API.get("/rides/all")
      .then((res) => {
        setAvailableRides(res.data);
      })
      .catch((err) => {
        console.error("Error fetching rides:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /* ================= PAYMENT ================= */

  const handleConfirmPayment = () => {
    const method =
      paymentMethod === "upi"
        ? `UPI (${upiApp.toUpperCase()})`
        : paymentMethod === "card"
        ? "Debit / Credit Card"
        : "Cash";

    alert(`Payment Successful via ${method} 🚗`);
    setShowPayment(false);
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />

      <main className="lg:ml-64 min-h-screen">
        {/* HEADER */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">
                Find Rides
              </h1>
              <p className="text-sm text-muted-foreground">
                Discover eco-friendly carpools near you
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by route..."
                  className="w-full lg:w-64 pl-10 pr-4 py-2.5 rounded-xl bg-muted border border-border outline-none text-sm"
                />
              </div>
              <Button variant="outline" size="icon" className="rounded-xl">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="p-4 lg:p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-foreground">
              Available Rides
            </h2>

            {loading && <p>Loading rides...</p>}

            {!loading && availableRides.length === 0 && (
              <p>No rides available</p>
            )}

            <div className="grid gap-4">
              {availableRides.map((ride) => (
                <div
                  key={ride.id}
                  className="stat-card p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* DRIVER INFO */}
                    <div className="flex items-center gap-3 lg:w-48">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                        {(ride.driver && ride.driver[0]) || "U"}
                      </div>
                      <div>
                        <p className="font-medium">
                          {ride.driver || "Anonymous Driver"}
                        </p>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-3 h-3 text-yellow-500" />
                          {ride.rating || "4.5"}
                        </div>
                      </div>
                    </div>

                    {/* ROUTE */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {ride.from || ride.from_location}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        {ride.to || ride.to_location}
                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                      <div className="flex items-center gap-1.5 text-sm">
                        <Clock className="w-4 h-4" />
                        {ride.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm">
                        <Users className="w-4 h-4" />
                        {ride.seats} seats
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-primary">
                        <Leaf className="w-4 h-4" />
                        {ride.co2Saved || "1.2 kg"}
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          ₹{ride.price || 100}
                        </p>
                      </div>

                      {/* JOIN RIDE */}
                      <Button
                        className="rounded-xl"
                        onClick={() => {
                          setSelectedRide(ride);
                          setShowPayment(true);
                        }}
                      >
                        Join Ride
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* PAYMENT MODAL */}
      {showPayment && selectedRide && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-4">
            <h2 className="text-xl font-semibold">Choose Payment Method</h2>

            <div className="border rounded-lg p-4 text-sm space-y-1">
              <p className="font-medium">
                {selectedRide.driver || "Anonymous Driver"}
              </p>
              <p>
                {(selectedRide.from || selectedRide.from_location)} →{" "}
                {(selectedRide.to || selectedRide.to_location)}
              </p>
              <p>Time: {selectedRide.time}</p>
              <p>Amount: ₹{selectedRide.price || 100}</p>
            </div>

            {/* PAYMENT OPTIONS */}
            <div className="space-y-2 text-sm">
              <label className="flex gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                />
                UPI
              </label>

              {paymentMethod === "upi" && (
                <div className="ml-6 space-y-1">
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      checked={upiApp === "gpay"}
                      onChange={() => setUpiApp("gpay")}
                    />
                    Google Pay
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      checked={upiApp === "phonepe"}
                      onChange={() => setUpiApp("phonepe")}
                    />
                    PhonePe
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      checked={upiApp === "paytm"}
                      onChange={() => setUpiApp("paytm")}
                    />
                    Paytm
                  </label>
                </div>
              )}

              <label className="flex gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Debit / Credit Card
              </label>

              <label className="flex gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                Cash
              </label>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setShowPayment(false)}>
                Cancel
              </Button>
              <Button onClick={handleConfirmPayment}>
                Confirm Payment
              </Button>
            </div>
          </div>
        </div>
      )}

      <AIChatbot />
    </div>
  );
};

export default FindRides;