import { Router } from "express";
import { createPartner, listPartners } from "../models/Partner.js";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { name, phone, city, companyName, truckTypes, fleetSize, drivingLicenseNo, aadharNumber } = req.body;

    if (!name || !phone || !city) {
      return res.status(400).json({ error: "Name, phone and city are required." });
    }

    const partner = await createPartner({
      name,
      phone,
      city,
      companyName,
      truckTypes,
      fleetSize,
      drivingLicenseNo,
      aadharNumber
    });

    res.status(201).json({ ok: true, partner });
  } catch (err) {
    console.error("Error creating partner:", err);
    res.status(500).json({ error: "Failed to create partner" });
  }
});

router.get("/", async (_req, res) => {
  const partners = await listPartners();
  res.json({ ok: true, partners });
});

export default router;
