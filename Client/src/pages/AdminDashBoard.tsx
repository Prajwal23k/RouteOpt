import StatsOverview from "@/components/StatsOverview";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard 🛠️</h1>
      <StatsOverview />
    </div>
  );
}
