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
      pickupCity,
      pickupAddress,
      dropCity,
      dropAddress,
      loadType,
      weightTons,
    } = req.body;

    let booking = await Booking.create({
      customerName,
      customerPhone,
      pickupCity,
      pickupAddress,
      dropCity,
      dropAddress,
      loadType,
      weightTons,
      status: "SEARCHING_DRIVER",
    });

    // find available drivers by category + city
    const drivers = await Driver.find({
      isAvailable: true,
      truckCategory: loadType,
      $or: [
        { currentCity: { $regex: new RegExp(pickupCity, "i") } },
        { city: { $regex: new RegExp(pickupCity, "i") } },
      ],
    }).limit(10);

    booking.requestedDrivers = drivers.map((d) => d._id);

    if (drivers[0]) {
      booking.assignedDriver = drivers[0]._id;
      booking.status = "ASSIGNED";
    } else {
      booking.status = "PENDING"; // nobody online yet
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

// POST /api/bookings/:id/accept - driver accepts booking
router.post("/:id/accept", async (req, res) => {
  try {
    const { driverId } = req.body;
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    const allowed = booking.requestedDrivers.some(
      (d) => d.toString() === driverId
    );
    if (!allowed) {
      return res
        .status(400)
        .json({ error: "Driver not allowed for this booking" });
    }

    booking.assignedDriver = driverId;
    booking.status = "ASSIGNED";
    await booking.save();

    await Driver.findByIdAndUpdate(driverId, { isAvailable: false });

    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/bookings/:id/reject - driver rejects booking
router.post("/:id/reject", async (req, res) => {
  try {
    const { driverId } = req.body;
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    booking.requestedDrivers = booking.requestedDrivers.filter(
      (d) => d.toString() !== driverId
    );

    if (booking.requestedDrivers.length === 0) {
      booking.assignedDriver = undefined;
      booking.status = "PENDING";
    } else {
      booking.assignedDriver = booking.requestedDrivers[0];
      booking.status = "ASSIGNED";
    }

    await booking.save();
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/bookings/:id/status - update status manually (admin)
router.post("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = [
      "PENDING",
      "SEARCHING_DRIVER",
      "ASSIGNED",
      "IN_PROGRESS",
      "COMPLETED",
      "CANCELLED",
    ];
    if (!allowed.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
