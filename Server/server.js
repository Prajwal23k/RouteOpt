import dotenv from "dotenv";
dotenv.config(); // 👈 MUST BE FIRST

import express from "express";
import cors from "cors";

import authRoutes from "./Routes/authroutes.js";
import { verifyToken } from "./Middleware/authMiddleware.js";
import rideRoutes from "./Routes/rideRoutes.js";
import aiRoutes from "./Routes/aiRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("RouteOpt Backend Running 🚀");
});

app.use("/api/auth", authRoutes);

app.get("/api/protected", verifyToken, (req, res) => {
  res.json({
    message: "You are authorized",
    user: req.user,
  });
});

app.use("/api/rides", rideRoutes);

// ✅ ENV CHECK (keep this until it works)
console.log(
  "OPENAI KEY:",
  process.env.OPENAI_API_KEY ? "LOADED ✅" : "MISSING ❌"
);

app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
