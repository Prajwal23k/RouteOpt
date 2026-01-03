import express from "express";
import { aiInsight } from "../Controllers/aiController.js";
import { verifyToken } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/insight", verifyToken, aiInsight);

export default router;
