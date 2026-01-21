// backend/routes/bookings.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// POST - Create new booking
router.post("/", async (req, res) => {
  try {
    const { name, phone, pickup, drop, date, notes } = req.body;

    // Validation
    if (!name || !phone || !pickup || !drop || !date) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create new booking
    const newBooking = new Booking({
      name,
      phone,
      pickup,
      drop,
      date,
      notes,
      status: "pending",
    });

    // Save to MongoDB
    await newBooking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Get single booking by ID
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - Update booking
router.put("/:id", async (req, res) => {
  try {
    const { name, phone, pickup, drop, date, notes, status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { name, phone, pickup, drop, date, notes, status },
      { new: true, runValidators: true }
    );

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json({ message: "Booking updated", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - Delete booking
router.delete("/:id", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
