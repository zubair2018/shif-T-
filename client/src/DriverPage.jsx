// src/DriverPage.jsx
import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:4000";

// STEP 1: put a real driver document ID from your Firestore "drivers" collection
const DRIVER_ID = "U7oUSgVxRLRJuP7lc0gJ";

async function fetchJson(url, options) {
  const res = await fetch(url, options);
  let data = {};
  try {
    data = await res.json();
  } catch (e) {}
  if (!res.ok) {
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data;
}

export default function DriverPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadBookings = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchJson(
        `${API_BASE}/drivers/${DRIVER_ID}/bookings`
      );
      setBookings(data || []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleResponse = async (bookingId, action) => {
    try {
      await fetchJson(`${API_BASE}/bookings/${bookingId}/driver-response`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }), // "accept" or "reject"
      });
      await loadBookings();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to update booking");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Driver Dashboard</h1>
            <p className="text-xs text-slate-400">
              Loads assigned to you (TEMP driver {DRIVER_ID})
            </p>
          </div>
          <button
            onClick={loadBookings}
            className="px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800"
          >
            Refresh
          </button>
        </header>

        {error && (
          <div className="px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/40 text-xs text-rose-100">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-sm text-slate-400">Loading loads…</p>
        ) : bookings.length === 0 ? (
          <p className="text-sm text-slate-400">
            No loads assigned to you yet.
          </p>
        ) : (
          <div className="space-y-3">
            {bookings.map((b) => {
              const from = b.pickupLocation || b.pickup || "Unknown";
              const to = b.dropLocation || b.drop || "Unknown";
              const time = b.time || b.pickupTime || "N/A";
              const name = b.name || b.customerName || "Customer";
              const phone = b.phone || b.customerPhone || "N/A";

              return (
                <div
                  key={b.id}
                  className="border border-slate-800 rounded-lg p-3 bg-slate-900/50"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">
                        {from} → {to}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {name} · {phone}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Time: {time}
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-400 text-right">
                      Status:{" "}
                      <span className="text-emerald-300 font-medium">
                        {b.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => handleResponse(b.id, "accept")}
                      className="px-3 py-1 text-xs rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-500/40 hover:bg-emerald-500/25"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleResponse(b.id, "reject")}
                      className="px-3 py-1 text-xs rounded-full bg-rose-500/10 text-rose-200 border border-rose-500/40 hover:bg-rose-500/20"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
