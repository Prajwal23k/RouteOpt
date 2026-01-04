import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
// import { API } from "@/utils/api";
import API from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);

      toast({
        title: "Registration successful",
        description: "You can now login 🚀",
      });

      navigate("/login");
    } catch (err) {
      console.error("Register error:", err);
      toast({
        title: "Registration failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 p-6">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl">
        <CardContent className="p-8">

          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-600 p-3 rounded-full text-white mb-3">
              <UserPlus size={28} />
            </div>
            <h2 className="text-2xl font-bold text-green-700">
              Create RouteOpt Account
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Green Commute & Carpool Platform
            </p>
          </div>

          <input
            name="name"
            placeholder="Name"
            className="w-full mb-3 p-3 border rounded-xl"
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-3 border rounded-xl"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full mb-5 p-3 border rounded-xl"
            onChange={handleChange}
          />

          <Button
            onClick={handleRegister}
            className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white text-lg py-2"
          >
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
