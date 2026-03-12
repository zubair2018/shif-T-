import express from "express";
import cors from "cors";
import "./firebaseAdmin.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import driverRoutes from "./routes/drivers.js";
import partnerRoutes from "./routes/partners.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get("/", (_req, res) => {
  res.send("Shifty API is running");
});

app.use("/api/bookings", bookingRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/partners", partnerRoutes);

app.use((req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
});

app.listen(PORT, () => {
  console.log(`Shifty API running on http://localhost:${PORT}`);
});
