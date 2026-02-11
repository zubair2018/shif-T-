// server/index.js
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const driversRoutes = require("./routes/drivers");
const bookingsRoutes = require("./routes/bookings");

const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

console.log("MONGO_URI:", MONGO_URI);

app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Shifty API is running");
});

app.use("/api/drivers", driversRoutes);
app.use("/api/bookings", bookingsRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`API running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
