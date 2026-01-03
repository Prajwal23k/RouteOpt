const express = require("express");
const cors = require("cors");
const authRoutes = require("./Routes/authroutes");

const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("RouteOpt Backend Running 🚀");
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/auth", authRoutes);

