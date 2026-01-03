const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = [];

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    id: users.length + 1,
    name,
    email,
    password: hashedPassword,
    role,
  });

  res.json({ message: "User registered successfully" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: "User not found" });

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
