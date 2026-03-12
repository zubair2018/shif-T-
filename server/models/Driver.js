import { firestore } from "../firebaseAdmin.js";

const DRIVERS_COLLECTION = "drivers";

function normalizeDriver(doc) {
  return { id: doc.id, ...doc.data() };
}

export async function createDriver(data) {
  const now = new Date().toISOString();
  const payload = {
    name: data.name,
    phone: data.phone,
    city: data.city,
    truckTypes: data.truckTypes || "",
    fleetSize: data.fleetSize || "",
    drivingLicenseNo: data.drivingLicenseNo || "",
    aadharNumber: data.aadharNumber || "",
    status: "pending",
    notes: "",
    createdAt: now,
    updatedAt: now
  };

  const docRef = await firestore.collection(DRIVERS_COLLECTION).add(payload);
  return { id: docRef.id, ...payload };
}

export async function listDrivers() {
  const snapshot = await firestore.collection(DRIVERS_COLLECTION).get();
  return snapshot.docs.map(normalizeDriver);
}

export async function listPendingDrivers() {
  const snapshot = await firestore
    .collection(DRIVERS_COLLECTION)
    .where("status", "==", "pending")
    .get();

  return snapshot.docs.map(normalizeDriver);
}

export async function getDriverById(id) {
  const snap = await firestore.collection(DRIVERS_COLLECTION).doc(id).get();
  if (!snap.exists) return null;
  return normalizeDriver(snap);
}

export async function setDriverStatus(id, status, notes = "") {
  const ref = firestore.collection(DRIVERS_COLLECTION).doc(id);
  const snap = await ref.get();
  if (!snap.exists) return null;

  const payload = {
    status,
    updatedAt: new Date().toISOString()
  };

  if (notes) payload.notes = notes;

  await ref.update(payload);
  const updated = await ref.get();
  return normalizeDriver(updated);
}
