// server/routes/bookingRoutes.js
import express from "express";
import {
  createBooking,
  getBookingsByUser,
  cancelBooking,
} from "../models/Booking.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// All booking routes require auth
router.use(authMiddleware);

// POST /bookings - create a booking
router.post("/", async (req, res) => {
  try {
    const { pickup, drop, time } = req.body;

    if (!pickup || !drop || !time) {
      return res
        .status(400)
        .json({ error: "pickup, drop and time are required" });
    }

    const booking = await createBooking({
      userId: req.user.uid,
      pickup,
      drop,
      time,
    });

    res.status(201).json(booking);
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// GET /bookings - see your bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await getBookingsByUser(req.user.uid);
    res.json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// DELETE /bookings/:id - cancel a booking
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await cancelBooking(id, req.user.uid);

    if (!result.ok && result.reason === "not_found") {
      return res.status(404).json({ error: "Booking not found" });
    }

    if (!result.ok && result.reason === "forbidden") {
      return res.status(403).json({ error: "Not allowed to cancel this booking" });
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Error cancelling booking:", err);
    res.status(500).json({ error: "Failed to cancel booking" });
  }
});

export default router;
