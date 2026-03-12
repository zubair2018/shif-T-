import express from "express";
import {
  createBooking,
  getAllBookings,
  updateBookingStatus,
  assignDriverToBooking,
  unassignDriverFromBooking
} from "../models/Booking.js";
import { getDriverById } from "../models/Driver.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const bookings = await getAllBookings();
    res.json({ ok: true, bookings });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      customerName,
      customerPhone,
      pickupAddress,
      dropAddress,
      date,
      time,
      truckType,
      loadDetails
    } = req.body;

    if (!customerName || !customerPhone || !pickupAddress || !dropAddress || !date || !time) {
      return res.status(400).json({ error: "Missing required fields for booking." });
    }

    const booking = await createBooking({
      customerName,
      customerPhone,
      pickupAddress,
      dropAddress,
      date,
      time,
      truckType,
      loadDetails
    });

    res.status(201).json({ ok: true, booking });
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await updateBookingStatus(req.params.id, status);
    if (!booking) return res.status(404).json({ error: "Booking not found or status invalid." });
    res.json({ ok: true, booking });
  } catch (err) {
    console.error("Error updating booking status:", err);
    res.status(500).json({ error: "Failed to update booking status" });
  }
});

router.post("/:id/accept", async (req, res) => {
  try {
    const { driverId } = req.body;
    if (!driverId) return res.status(400).json({ error: "driverId is required." });

    const driver = await getDriverById(driverId);
    if (!driver) return res.status(404).json({ error: "Driver not found." });

    const booking = await assignDriverToBooking(req.params.id, driverId);
    if (!booking) return res.status(404).json({ error: "Booking not found." });

    res.json({ ok: true, booking });
  } catch (err) {
    console.error("Error assigning driver:", err);
    res.status(500).json({ error: "Failed to assign driver" });
  }
});

router.post("/:id/reject", async (req, res) => {
  try {
    const booking = await unassignDriverFromBooking(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found." });
    res.json({ ok: true, booking });
  } catch (err) {
    console.error("Error rejecting booking:", err);
    res.status(500).json({ error: "Failed to reject booking" });
  }
});

export default router;
