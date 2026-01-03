import { useState } from 'react';
import DashboardSidebar, { MobileHeader } from '@/components/DashboardSidebar';
import AIChatbot from '@/components/AIChatbot';
import { Search, MapPin, Clock, Users, Filter, Star, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const availableRides = [
  {
    id: 1,
    driver: 'Priya Sharma',
    avatar: 'PS',
    rating: 4.8,
    from: 'Sector 62, Noida',
    to: 'Cyber Hub, Gurgaon',
    time: '08:30 AM',
    date: 'Tomorrow',
    seats: 2,
    price: 150,
    co2Saved: '2.3 kg',
    matchScore: 92
  },
  {
    id: 2,
    driver: 'Rahul Verma',
    avatar: 'RV',
    rating: 4.9,
    from: 'Vasant Kunj',
    to: 'Connaught Place',
    time: '09:00 AM',
    date: 'Tomorrow',
    seats: 3,
    price: 120,
    co2Saved: '1.8 kg',
    matchScore: 87
  },
  {
    id: 3,
    driver: 'Anita Das',
    avatar: 'AD',
    rating: 4.7,
    from: 'Dwarka Sector 21',
    to: 'Aerocity',
    time: '07:45 AM',
    date: 'Jan 5',
    seats: 1,
    price: 100,
    co2Saved: '1.5 kg',
    matchScore: 78
  },
];

const FindRides = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedRide, setSelectedRide] = useState<any>(null);

  // 🔥 payment states
  const [paymentMethod, setPaymentMethod] =
    useState<'upi' | 'card' | 'cash'>('upi');
  const [upiApp, setUpiApp] =
    useState<'gpay' | 'phonepe' | 'paytm'>('gpay');

  const handleConfirmPayment = () => {
    const method =
      paymentMethod === 'upi'
        ? `UPI (${upiApp.toUpperCase()})`
        : paymentMethod === 'card'
        ? 'Debit / Credit Card'
        : 'Cash';

    alert(`Payment Successful via ${method} 🚗`);
    setShowPayment(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />

      <main className="lg:ml-64 min-h-screen">
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

        <div className="p-4 lg:p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-foreground">
              Available Rides ({availableRides.length})
            </h2>

            <div className="grid gap-4">
              {availableRides.map((ride) => (
                <div key={ride.id} className="stat-card p-5">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex items-center gap-3 lg:w-48">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                        {ride.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{ride.driver}</p>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-3 h-3 text-yellow-500" />
                          {ride.rating}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      {ride.from} → {ride.to}
                    </div>

                    <div className="flex items-center gap-4">
                      <Clock className="w-4 h-4" /> {ride.time}
                      <Users className="w-4 h-4" /> {ride.seats}
                      <Leaf className="w-4 h-4 text-green-600" /> {ride.co2Saved}
                      <p className="font-semibold">₹{ride.price}</p>

                      <Button
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

            <div className="border p-4 rounded-lg text-sm">
              <p className="font-medium">{selectedRide.driver}</p>
              <p>{selectedRide.from} → {selectedRide.to}</p>
              <p>Time: {selectedRide.time}</p>
              <p>Amount: ₹{selectedRide.price}</p>
            </div>

            {/* Payment options */}
            <div className="space-y-2 text-sm">
              <label className="flex gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                />
                UPI
              </label>

              {paymentMethod === 'upi' && (
                <div className="ml-6 space-y-1">
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      checked={upiApp === 'gpay'}
                      onChange={() => setUpiApp('gpay')}
                    />
                    Google Pay
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      checked={upiApp === 'phonepe'}
                      onChange={() => setUpiApp('phonepe')}
                    />
                    PhonePe
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      checked={upiApp === 'paytm'}
                      onChange={() => setUpiApp('paytm')}
                    />
                    Paytm
                  </label>
                </div>
              )}

              <label className="flex gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                Debit / Credit Card
              </label>

              <label className="flex gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
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