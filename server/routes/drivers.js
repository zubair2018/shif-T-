import { Router } from "express";
import {
  createDriver,
  listDrivers,
  listPendingDrivers,
  getDriverById,
  setDriverStatus
} from "../models/Driver.js";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      phone,
      city,
      truckTypes,
      fleetSize,
      drivingLicenseNo,
      aadharNumber
    } = req.body;

    if (!name || !phone || !city) {
      return res.status(400).json({ error: "Name, phone and city are required." });
    }

    const driver = await createDriver({
      name,
      phone,
      city,
      truckTypes,
      fleetSize,
      drivingLicenseNo,
      aadharNumber
    });

    res.status(201).json({ ok: true, driver });
  } catch (err) {
    console.error("Error creating driver:", err);
    res.status(500).json({ error: "Failed to create driver" });
  }
});

router.get("/", async (_req, res) => {
  const drivers = await listDrivers();
  res.json({ ok: true, drivers });
});

router.get("/pending", async (_req, res) => {
  const drivers = await listPendingDrivers();
  res.json({ ok: true, drivers });
});

router.get("/:id", async (req, res) => {
  const driver = await getDriverById(req.params.id);
  if (!driver) return res.status(404).json({ error: "Driver not found." });
  res.json({ ok: true, driver });
});

router.post("/:id/verify", async (req, res) => {
  const { notes } = req.body;
  const driver = await setDriverStatus(req.params.id, "verified", notes || "");
  if (!driver) return res.status(404).json({ error: "Driver not found." });
  res.json({ ok: true, driver });
});

router.post("/:id/reject", async (req, res) => {
  const { notes } = req.body;
  const driver = await setDriverStatus(req.params.id, "rejected", notes || "");
  if (!driver) return res.status(404).json({ error: "Driver not found." });
  res.json({ ok: true, driver });
});

export default router;
