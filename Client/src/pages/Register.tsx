import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

export default function Register() {
  const navigate = useNavigate();

  function handleRegister() {
    // Show registration success toast and redirect to login
    toast({ title: "registeration done successfully" });
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 p-6">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl">
        <CardContent className="p-8">
          
          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-600 p-3 rounded-full text-white mb-3">
              <UserPlus size={28} />
            </div>
            <h2 className="text-2xl font-bold text-green-700">Create RouteOpt Account</h2>
            <p className="text-sm text-gray-500 mt-1">Green Commute & Carpool Platform</p>
          </div>

          <input
            type="email"
            placeholder="Institution / Company Email"
            className="w-full mb-3 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full mb-3 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="date"
            className="w-full mb-3 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            placeholder="Institution / Company Name"
            className="w-full mb-5 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <Button onClick={handleRegister} className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white text-lg py-2">
            Register
          </Button>

          <p className="text-xs text-center text-gray-500 mt-4">
            By registering you support eco-friendly commuting 🌱
          </p>

        </CardContent>
      </Card>
    </div>
  );
}