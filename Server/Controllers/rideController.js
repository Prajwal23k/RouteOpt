import pool from "../Config/db.js";
import { calculateCarbon } from "../Utils/carbonCalculator.js";

export const createRide = async (req, res) => {
  const { from, to, time, seats } = req.body;

  const result = await pool.query(
    "INSERT INTO rides (from_location, to_location, time, seats, owner_id) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [from, to, time, seats, req.user.id]
  );

  res.json({ message: "Ride created", ride: result.rows[0] });
};

export const getAllRides = async (req, res) => {
  const result = await pool.query("SELECT * FROM rides");
  res.json(result.rows);
};

export const getMyRides = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM rides WHERE owner_id=$1",
    [req.user.id]
  );
  res.json(result.rows);
};

export const getSuggestedRides = async (req, res) => {
  const { destination, time } = req.query;

  const userTime = new Date(`2024-01-01 ${time}`);

  const result = await pool.query(
    "SELECT * FROM rides WHERE to_location=$1 AND seats>0 AND owner_id!=$2",
    [destination, req.user.id]
  );

  const suggestions = result.rows.filter((ride) => {
    const rideTime = new Date(`2024-01-01 ${ride.time}`);
    const diff = Math.abs(rideTime - userTime) / (1000 * 60);
    return diff <= 30;
  });

  res.json(suggestions);
};

export const getCarbonStats = (req, res) => {
  const { distance, people } = req.query;
  const stats = calculateCarbon(Number(distance), Number(people));
  res.json(stats);
};
