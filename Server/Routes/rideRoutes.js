import express from "express";

import {
  createRide,
  getAllRides,
  getMyRides,
  getSuggestedRides,
  getCarbonStats,
} from "../Controllers/rideController.js";

import { verifyToken } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", verifyToken, createRide);
router.get("/all", verifyToken, getAllRides);
router.get("/my", verifyToken, getMyRides);
router.get("/suggested", verifyToken, getSuggestedRides);
router.get("/carbon", verifyToken, getCarbonStats);

export default router; 