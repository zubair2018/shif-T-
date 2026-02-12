// server/routes/bookings.js
const express = require("express");
const Booking = require("../models/Booking");
const Driver = require("../models/Driver");

const router = express.Router();

// POST /api/bookings - create booking + basic matching
router.post("/", async (req, res) => {
  try {
    const {
      customerName,
      customerPhone,
      pickupAddress,
      dropAddress,
      loadType,
      weightTons,
    } = req.body;

    let booking = await Booking.create({
      customerName,
      customerPhone,
      pickupAddress,
      dropAddress,
      loadType,
      weightTons,
      status: "SEARCHING_DRIVER",
    });

    // Simple matching: just online drivers with same category for now
    const drivers = await Driver.find({
      isAvailable: true,
      truckCategory: loadType,
    }).limit(10);

    booking.requestedDrivers = drivers.map((d) => d._id);

    if (drivers[0]) {
      booking.assignedDriver = drivers[0]._id;
      booking.status = "ASSIGNED";
    } else {
      booking.status = "PENDING";
    }

    booking = await booking.save();

    res.status(201).json({
      booking,
      driverCount: drivers.length,
      firstDriver: drivers[0] || null,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/bookings - list bookings (admin)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .sort({ createdAt: -1 })
      .populate("assignedDriver", "name phone truckType city");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Accept / reject / status endpoints stay same...
// (keep your existing /:id/accept, /:id/reject, /:id/status here)

module.exports = router;
