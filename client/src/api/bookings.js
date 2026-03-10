// src/api/bookings.js
import { auth } from "../firebase";

const API_BASE = "http://localhost:4000";

async function getIdTokenOrThrow() {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("Not logged in");
  }
  return user.getIdToken();
}

export async function createBookingApi({ pickup, drop, time }) {
  const idToken = await getIdTokenOrThrow();

  const res = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({ pickup, drop, time }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || "Failed to create booking");
  }

  return data;
}

export async function getMyBookingsApi() {
  const idToken = await getIdTokenOrThrow();

  const res = await fetch(`${API_BASE}/bookings`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || "Failed to fetch bookings");
  }

  return data;
}

export async function cancelBookingApi(id) {
  const idToken = await getIdTokenOrThrow();

  const res = await fetch(`${API_BASE}/bookings/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || "Failed to cancel booking");
  }

  return data;
}
