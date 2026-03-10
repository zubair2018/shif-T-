// src/components/BookingsTest.jsx
import React, { useState, useEffect } from "react";
import {
  createBookingApi,
  getMyBookingsApi,
  cancelBookingApi,
} from "../api/bookings";

export default function BookingsTest() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadBookings() {
    try {
      setLoading(true);
      setError("");
      const data = await getMyBookingsApi();
      setBookings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBookings();
  }, []);

  async function handleCreate() {
    try {
      setLoading(true);
      setError("");
      const now = new Date().toISOString();
      await createBookingApi({
        pickup: "A",
        drop: "B",
        time: now,
      });
      await loadBookings();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCancel(id) {
    try {
      setLoading(true);
      setError("");
      await cancelBookingApi(id);
      await loadBookings();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Bookings Test</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleCreate} disabled={loading}>
        Create Booking
      </button>
      <button onClick={loadBookings} disabled={loading} style={{ marginLeft: 8 }}>
        Refresh
      </button>
      {loading && <p>Loading...</p>}
      <ul>
        {bookings.map((b) => (
          <li key={b.id}>
            {b.pickup} → {b.drop} at {b.time} ({b.status}){" "}
            <button onClick={() => handleCancel(b.id)} disabled={loading}>
              Cancel
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
