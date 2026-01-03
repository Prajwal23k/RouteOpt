import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../Config/db.js";

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    "INSERT INTO users (name, email, password, role) VALUES ($1,$2,$3,$4) RETURNING id",
    [name, email, hashedPassword, role]
  );

  res.json({ message: "User registered", userId: result.rows[0].id });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  if (result.rows.length === 0)
    return res.status(401).json({ message: "User not found" });

  const user = result.rows[0];

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    "secret123",
    { expiresIn: "1h" }
  );

  res.json({ token });
};
