// server/models/Booking.js
import { firestore } from "../firebaseAdmin.js";

const BOOKINGS_COLLECTION = "bookings";

// Create a new booking
async function createBooking(data) {
  const now = new Date().toISOString();

  const booking = {
    userId: data.userId,
    pickup: data.pickup,
    drop: data.drop,
    time: data.time,
    status: "active",
    createdAt: now,
  };

  const docRef = await firestore.collection(BOOKINGS_COLLECTION).add(booking);
  return { id: docRef.id, ...booking };
}

// Get all bookings for a specific user
async function getBookingsByUser(userId) {
  const snapshot = await firestore
    .collection(BOOKINGS_COLLECTION)
    .where("userId", "==", userId)
    .get();

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Cancel a booking (mark status = "cancelled")
async function cancelBooking(id, userId) {
  const docRef = firestore.collection(BOOKINGS_COLLECTION).doc(id);
  const doc = await docRef.get();

  if (!doc.exists) {
    return { ok: false, reason: "not_found" };
  }

  const data = doc.data();

  if (data.userId !== userId) {
    return { ok: false, reason: "forbidden" };
  }

  await docRef.update({ status: "cancelled" });
  return { ok: true };
}

export { createBooking, getBookingsByUser, cancelBooking };
