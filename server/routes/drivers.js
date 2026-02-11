// server/routes/drivers.js
const express = require("express");
const Driver = require("../models/Driver");

const router = express.Router();

// POST /api/drivers - create driver
router.post("/", async (req, res) => {
  try {
    const {
      name,
      phone,
      truckType,
      city,
      notes,
      aadharNumber,
      dlNumber,
      truckCategory,
    } = req.body;

    const driver = await Driver.create({
      name,
      phone,
      truckType,
      city,
      notes,
      aadharNumber,
      dlNumber,
      truckCategory: truckCategory || "mini",
      isAvailable: false,
      currentCity: city,
    });

    res.status(201).json(driver);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/drivers - list drivers
router.get("/", async (req, res) => {
  try {
    const drivers = await Driver.find().sort({ createdAt: -1 });
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/drivers/:id/availability - go online / offline
router.patch("/:id/availability", async (req, res) => {
  try {
    const { isAvailable, currentCity } = req.body;
    const driver = await Driver.findByIdAndUpdate(
      req.params.id,
      {
        isAvailable: !!isAvailable,
        ...(currentCity && { currentCity }),
      },
      { new: true }
    );
    if (!driver) return res.status(404).json({ error: "Driver not found" });
    res.json(driver);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
