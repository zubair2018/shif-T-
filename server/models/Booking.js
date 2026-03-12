import { firestore } from "../firebaseAdmin.js";

const BOOKINGS_COLLECTION = "bookings";

const ALLOWED_STATUS = [
  "pending",
  "assigned",
  "in_progress",
  "completed",
  "cancelled"
];

export function normalizeBooking(doc) {
  return { id: doc.id, ...doc.data() };
}

export async function createBooking(data) {
  const now = new Date().toISOString();
  const payload = {
    customerName: data.customerName,
    customerPhone: data.customerPhone,
    pickupAddress: data.pickupAddress,
    dropAddress: data.dropAddress,
    date: data.date,
    time: data.time,
    truckType: data.truckType || "",
    loadDetails: data.loadDetails || "",
    status: "pending",
    assignedDriverId: null,
    createdAt: now,
    updatedAt: now
  };

  const docRef = await firestore.collection(BOOKINGS_COLLECTION).add(payload);
  return { id: docRef.id, ...payload };
}

export async function getAllBookings() {
  const snapshot = await firestore.collection(BOOKINGS_COLLECTION).get();
  return snapshot.docs.map(normalizeBooking);
}

export async function updateBookingStatus(id, status) {
  if (!ALLOWED_STATUS.includes(status)) return null;

  const ref = firestore.collection(BOOKINGS_COLLECTION).doc(id);
  const snap = await ref.get();
  if (!snap.exists) return null;

  const updatedAt = new Date().toISOString();
  await ref.update({ status, updatedAt });
  const updated = await ref.get();
  return normalizeBooking(updated);
}

export async function assignDriverToBooking(id, driverId) {
  const ref = firestore.collection(BOOKINGS_COLLECTION).doc(id);
  const snap = await ref.get();
  if (!snap.exists) return null;

  const updatedAt = new Date().toISOString();
  await ref.update({ assignedDriverId: driverId, status: "assigned", updatedAt });
  const updated = await ref.get();
  return normalizeBooking(updated);
}

export async function unassignDriverFromBooking(id) {
  const ref = firestore.collection(BOOKINGS_COLLECTION).doc(id);
  const snap = await ref.get();
  if (!snap.exists) return null;

  const updatedAt = new Date().toISOString();
  await ref.update({ assignedDriverId: null, status: "pending", updatedAt });
  const updated = await ref.get();
  return normalizeBooking(updated);
}
