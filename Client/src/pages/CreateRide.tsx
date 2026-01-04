import { useState } from "react";
import API from "../services/api";
import DashboardSidebar from "@/components/DashboardSidebar";
import { MobileHeader } from "@/components/DashboardSidebar";

export default function CreateRide() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    time: "",
    seats: 1,
  });

  const submit = async () => {
    await API.post("/rides/create", form);
    alert("Ride created successfully");
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />

      <main className="lg:ml-64 p-6">
        <h1 className="text-2xl font-bold mb-6">Create Ride</h1>

        <div className="max-w-md space-y-4">
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="From"
            value={form.from}
            onChange={(e) =>
              setForm({ ...form, from: e.target.value })
            }
          />

          <input
            className="w-full p-3 border rounded-lg"
            placeholder="To"
            value={form.to}
            onChange={(e) =>
              setForm({ ...form, to: e.target.value })
            }
          />

          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Time (9:00 AM)"
            value={form.time}
            onChange={(e) =>
              setForm({ ...form, time: e.target.value })
            }
          />

          <input
            type="number"
            min={1}
            className="w-full p-3 border rounded-lg"
            placeholder="Seats"
            value={form.seats}
            onChange={(e) =>
              setForm({ ...form, seats: Number(e.target.value) })
            }
          />

          <button
            onClick={submit}
            className="w-full bg-primary text-white py-3 rounded-lg"
          >
            Create Ride
          </button>
        </div>
      </main>
    </div>
  );
}
