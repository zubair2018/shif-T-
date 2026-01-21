// backend/index.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

// IMPORT ROUTES
const ownersRoutes = require("./routes/owners");
const bookingsRoutes = require("./routes/bookings");

// HEALTH CHECK
app.get("/", (req, res) => {
  res.send("Shifty API is running with MongoDB");
});

// MOUNT ROUTES
app.use("/api/owners", ownersRoutes);
app.use("/api/bookings", bookingsRoutes);

// CONNECT TO MONGODB AND START SERVER
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 4000;

console.log("Connecting to MongoDB...");
console.log("MONGO_URI:", MONGO_URI);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`✅ API running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
