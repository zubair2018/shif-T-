// server/index.js
import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" with { type: "json" };

const app = express();
const PORT = process.env.PORT || 4000;

// ---- Firebase Admin init ----
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
const db = admin.firestore();

// ---- Middleware ----
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// ---- Helpers ----
function requireFields(body, fields) {
  const missing = fields.filter(
    (f) => !body[f] || body[f].toString().trim() === ""
  );
  return missing;
}

// ---- Routes ----

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "ShifT API running" });
});

// Create booking
app.post("/bookings", async (req, res) => {
  try {
    const { name, phone, pickup, drop, time, vehicleType } = req.body;

    const missing = requireFields(req.body, [
      "name",
      "phone",
      "pickup",
      "drop",
      "time",
    ]);
    if (missing.length > 0) {
      return res.status(400).json({
        error: `Missing required fields: ${missing.join(", ")}`,
      });
    }

    const booking = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      pickup: String(pickup).trim(),
      drop: String(drop).trim(),
      time: String(time).trim(),
      vehicleType: String(vehicleType || "mini").trim(),
      status: "pending",
      driverId: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const docRef = await db.collection("bookings").add(booking);
    return res.status(201).json({ id: docRef.id, ...booking });
  } catch (err) {
    console.error("Create booking failed", err);
    return res.status(500).json({ error: "Failed to create booking" });
  }
});

// List bookings
app.get("/bookings", async (req, res) => {
  try {
    const snap = await db
      .collection("bookings")
      .orderBy("createdAt", "desc")
      .get();
    const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (err) {
    console.error("Get bookings failed", err);
    res.status(500).json({ error: "Failed to load bookings" });
  }
});

// Create driver
app.post("/drivers", async (req, res) => {
  try {
    const {
      name,
      phone,
      city,
      truckTypes,
      fleetSize,
      drivingLicenseNo,
      aadharNumber,
      licenseDocUrl,
      aadharDocUrl,
    } = req.body;

    const missing = requireFields(req.body, ["name", "phone", "city"]);
    if (missing.length > 0) {
      return res.status(400).json({
        error: `Missing required fields: ${missing.join(", ")}`,
      });
    }

    const driver = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      city: String(city).trim(),
      truckTypes: String(truckTypes || "").trim(),
      fleetSize: String(fleetSize || "").trim(),
      drivingLicenseNo: String(drivingLicenseNo || "").trim(),
      aadharNumber: String(aadharNumber || "").trim(),
      licenseDocUrl: String(licenseDocUrl || "").trim(),
      aadharDocUrl: String(aadharDocUrl || "").trim(),
      status: "pending",
      rating: 0,
      authUid: null,
      fcmToken: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const docRef = await db.collection("drivers").add(driver);
    return res.status(201).json({ id: docRef.id, ...driver });
  } catch (err) {
    console.error("Create driver failed", err);
    return res.status(500).json({ error: "Failed to create driver" });
  }
});

// List drivers
app.get("/drivers", async (req, res) => {
  try {
    const snap = await db
      .collection("drivers")
      .orderBy("createdAt", "desc")
      .get();
    const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (err) {
    console.error("Get drivers failed", err);
    res.status(500).json({ error: "Failed to load drivers" });
  }
});

// Assign booking to driver (admin)
app.patch("/bookings/:id/assign-driver", async (req, res) => {
  try {
    const { id } = req.params;
    const { driverId } = req.body;

    if (!driverId) {
      return res.status(400).json({ error: "driverId is required" });
    }

    const bookingRef = db.collection("bookings").doc(id);
    const snap = await bookingRef.get();
    if (!snap.exists) {
      return res.status(404).json({ error: "Booking not found" });
    }

    await bookingRef.update({
      driverId,
      status: "assigned",
      updatedAt: new Date().toISOString(),
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("Assign driver failed", err);
    return res.status(500).json({ error: "Failed to assign driver" });
  }
});

// Driver accepts / rejects load
app.patch("/bookings/:id/driver-response", async (req, res) => {
  try {
    const { id } = req.params;
    const { action } = req.body; // "accept" | "reject"

    if (!["accept", "reject"].includes(action)) {
      return res.status(400).json({ error: "Invalid action" });
    }

    const bookingRef = db.collection("bookings").doc(id);
    const snap = await bookingRef.get();
    if (!snap.exists) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const newStatus = action === "accept" ? "accepted" : "pending";
    await bookingRef.update({
      status: newStatus,
      updatedAt: new Date().toISOString(),
    });

    return res.json({ success: true, status: newStatus });
  } catch (err) {
    console.error("Driver response failed", err);
    return res.status(500).json({ error: "Failed to update booking" });
  }
});

// Get bookings for a driver (FIXED - no orderBy)
app.get("/drivers/:id/bookings", async (req, res) => {
  try {
    const { id } = req.params;

    const snap = await db
      .collection("bookings")
      .where("driverId", "==", id)
      .get();

    const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    
    // Sort client-side if needed
    data.sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return dateB - dateA;
    });

    res.json(data);
  } catch (err) {
    console.error("Get driver bookings failed", err);
    res.status(500).json({ error: "Failed to load driver bookings" });
  }
});

// ---- Start server ----
app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
