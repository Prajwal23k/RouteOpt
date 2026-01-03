import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { LogIn } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userName", name.trim() || extractNameFromEmail(email));
    localStorage.setItem("userEmail", email.trim());
    navigate("/dashboard");
  }

  function extractNameFromEmail(emailStr: string) {
    try {
      const part = emailStr.split("@")[0];
      return part.replace(/[._]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    } catch (e) {
      return "User";
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 p-6">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl">
        <CardContent className="p-8">

          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-600 p-3 rounded-full text-white mb-3">
              <LogIn size={28} />
            </div>
            <h2 className="text-2xl font-bold text-green-700">Welcome to RouteOpt</h2>
            <p className="text-sm text-gray-500 mt-1">Green Commute Platform</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-3 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Institution / Company Email"
              className="w-full mb-3 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white text-lg py-2">
              Login
            </Button>
          </form>

          <p className="text-sm mt-4 text-center text-gray-600">
            New user?{" "}
            <Link to="/register" className="text-green-600 font-semibold hover:underline">
              Register here
            </Link>
          </p>

        </CardContent>
      </Card>
    </div>
  );
}