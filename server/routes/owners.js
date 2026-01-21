// backend/routes/owners.js
const express = require("express");
const router = express.Router();
const TruckOwner = require("../models/TruckOwner");

// POST - Create new truck owner
router.post("/", async (req, res) => {
  try {
    const { name, phone, truckType, city, notes } = req.body;

    // Validation
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required" });
    }

    // Create new owner
    const newOwner = new TruckOwner({
      name,
      phone,
      truckType,
      city,
      notes,
      status: "pending",
    });

    // Save to MongoDB
    await newOwner.save();

    res.status(201).json({
      message: "Truck owner registered successfully",
      owner: newOwner,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Get all truck owners
router.get("/", async (req, res) => {
  try {
    const owners = await TruckOwner.find().sort({ createdAt: -1 });
    res.json(owners);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Get single truck owner by ID
router.get("/:id", async (req, res) => {
  try {
    const owner = await TruckOwner.findById(req.params.id);
    if (!owner) {
      return res.status(404).json({ error: "Owner not found" });
    }
    res.json(owner);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - Update truck owner
router.put("/:id", async (req, res) => {
  try {
    const { name, phone, truckType, city, notes, status } = req.body;

    const owner = await TruckOwner.findByIdAndUpdate(
      req.params.id,
      { name, phone, truckType, city, notes, status },
      { new: true, runValidators: true }
    );

    if (!owner) {
      return res.status(404).json({ error: "Owner not found" });
    }

    res.json({ message: "Owner updated", owner });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - Delete truck owner
router.delete("/:id", async (req, res) => {
  try {
    const owner = await TruckOwner.findByIdAndDelete(req.params.id);
    if (!owner) {
      return res.status(404).json({ error: "Owner not found" });
    }
    res.json({ message: "Owner deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
