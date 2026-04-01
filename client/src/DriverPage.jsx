// src/DriverPage.jsx
import React, { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

// ⚠️ TEMPORARY: Replace with real Firestore driver doc ID
const DRIVER_ID = "U7oUSgVxRLRJuP7lc0gJ";

async function fetchJson(url, options) {
  const res = await fetch(url, options);
  let data = {};
  try { data = await res.json(); } catch (e) {}
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

function StatusBadge({ status }) {
  const colors = {
    pending: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
    assigned: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    accepted: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    on_trip: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    completed: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    cancelled: "bg-red-500/15 text-red-300 border-red-500/30",
  };
  const labels = {
    pending: "Pending",
    assigned: "Assigned",
    accepted: "Accepted",
    on_trip: "On Trip 🚛",
    completed: "Completed ✅",
    cancelled: "Cancelled",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] border font-medium ${colors[status] || "bg-slate-700 text-slate-300"}`}>
      {labels[status] || status}
    </span>
  );
}

function BookingDetailModal({ booking, onClose, onAccept, onRelease, onStartTrip, onCompleteTrip }) {
  const isPending = booking.status === "pending";
  const isAssigned = booking.status === "assigned" && booking.driverId === DRIVER_ID;
  const isAccepted = booking.status === "accepted" && booking.driverId === DRIVER_ID;
  const isOnTrip = booking.status === "on_trip" && booking.driverId === DRIVER_ID;
  const isCompleted = booking.status === "completed";
  const isCancelled = booking.status === "cancelled";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Booking Details</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-xl">✕</button>
        </div>

        <div className="space-y-3 text-sm">
          <div className="bg-slate-800 rounded-lg p-3 space-y-2">
            <Row label="Customer" value={booking.name} />
            <Row label="Phone" value={`+91${booking.phone}`} />
          </div>
          <div className="bg-slate-800 rounded-lg p-3 space-y-2">
            <Row label="Pickup" value={booking.pickup} bold />
            <Row label="Drop" value={booking.drop} bold />
            <Row label="Time" value={booking.time} />
          </div>
          <div className="bg-slate-800 rounded-lg p-3 space-y-2">
            <Row label="Vehicle" value={booking.vehicleType} />
            <Row label="Load" value={booking.loadDetails || "N/A"} />
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Status</span>
              <StatusBadge status={booking.status} />
            </div>
          </div>
        </div>

        {/* Action buttons based on status */}
        <div className="flex flex-col gap-2 pt-1">
          {/* Accept load */}
          {(isPending || isAssigned) && (
            <button
              onClick={() => onAccept(booking.id)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition"
            >
              ✅ Accept Load
            </button>
          )}

          {/* Start trip */}
          {isAccepted && (
            <button
              onClick={() => onStartTrip(booking.id)}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition"
            >
              🚛 Start Trip
            </button>
          )}

          {/* Complete trip */}
          {isOnTrip && (
            <button
              onClick={() => onCompleteTrip(booking.id)}
              className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition"
            >
              🏁 Mark as Completed
            </button>
          )}

          {/* Release load — only if accepted, not yet on trip */}
          {isAccepted && (
            <button
              onClick={() => onRelease(booking.id)}
              className="w-full py-2.5 rounded-xl bg-rose-800 hover:bg-rose-700 text-white font-semibold text-sm transition"
            >
              🔄 Release Load
            </button>
          )}

          {/* Completed/cancelled — just show status */}
          {(isCompleted || isCancelled) && (
            <div className="text-center text-slate-400 text-xs py-2">
              This trip is {booking.status}. No further actions needed.
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 text-sm transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-400">{label}</span>
      <span className={`text-white ${bold ? "font-semibold" : ""}`}>{value || "N/A"}</span>
    </div>
  );
}

export default function DriverPage() {
  const [allBookings, setAllBookings] = useState([]);
  const [cityBookings, setCityBookings] = useState([]);
  const [driverInfo, setDriverInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("available");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [actionLoading, setActionLoading] = useState("");

  useEffect(() => {
    loadAll();
    const interval = setInterval(loadAll, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadAll = async () => {
    try {
      setLoading(true);
      setError("");

      const driversRes = await fetch(`${API_BASE}/drivers`);
      const drivers = await driversRes.json();
      const me = drivers.find((d) => d.id === DRIVER_ID);
      if (me) setDriverInfo(me);

      const myData = await fetchJson(`${API_BASE}/drivers/${DRIVER_ID}/bookings`);
      setAllBookings(myData || []);

      if (me?.city) {
        const cityData = await fetchJson(
          `${API_BASE}/bookings/city/${encodeURIComponent(me.city)}?driverId=${DRIVER_ID}&truckType=${encodeURIComponent(me.truckTypes || "")}`
        );
        setCityBookings(cityData || []);
      }
    } catch (err) {
      setError(err.message || "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (bookingId) => {
    try {
      setActionLoading(bookingId);
      const booking = [...cityBookings, ...allBookings].find((b) => b.id === bookingId);
      if (!booking) return;
      if (booking.status === "pending") {
        await fetchJson(`${API_BASE}/bookings/${bookingId}/self-assign`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ driverId: DRIVER_ID }),
        });
      } else {
        await fetchJson(`${API_BASE}/bookings/${bookingId}/driver-response`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "accept" }),
        });
      }
      setSelectedBooking(null);
      await loadAll();
    } catch (err) {
      alert(err.message || "Failed to accept. Someone else may have taken it.");
      await loadAll();
    } finally {
      setActionLoading("");
    }
  };

  const handleRelease = async (bookingId) => {
    if (!window.confirm("Release this load back to the pool?")) return;
    try {
      setActionLoading(bookingId);
      await fetchJson(`${API_BASE}/bookings/${bookingId}/release`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driverId: DRIVER_ID }),
      });
      setSelectedBooking(null);
      await loadAll();
    } catch (err) {
      alert(err.message || "Failed to release");
    } finally {
      setActionLoading("");
    }
  };

  const handleStartTrip = async (bookingId) => {
    if (!window.confirm("Start this trip? This will notify the customer.")) return;
    try {
      setActionLoading(bookingId);
      await fetchJson(`${API_BASE}/bookings/${bookingId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "on_trip" }),
      });
      setSelectedBooking(null);
      await loadAll();
    } catch (err) {
      alert(err.message || "Failed to start trip");
    } finally {
      setActionLoading("");
    }
  };

  const handleCompleteTrip = async (bookingId) => {
    if (!window.confirm("Mark this trip as completed?")) return;
    try {
      setActionLoading(bookingId);
      await fetchJson(`${API_BASE}/bookings/${bookingId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" }),
      });
      setSelectedBooking(null);
      await loadAll();
    } catch (err) {
      alert(err.message || "Failed to complete trip");
    } finally {
      setActionLoading("");
    }
  };

  const activeBookings = allBookings.filter((b) =>
    ["assigned", "accepted", "on_trip"].includes(b.status)
  );
  const completedBookings = allBookings.filter((b) =>
    ["completed", "cancelled"].includes(b.status)
  );

  const tabs = [
    { key: "available", label: `Available (${cityBookings.length})` },
    { key: "active", label: `My Active (${activeBookings.length})` },
    { key: "completed", label: `Completed (${completedBookings.length})` },
  ];

  const displayBookings =
    activeTab === "available" ? cityBookings :
    activeTab === "active" ? activeBookings :
    completedBookings;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">

        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Driver Dashboard</h1>
            <p className="text-xs text-slate-400">
              {driverInfo
                ? `${driverInfo.name} · ${driverInfo.city} · ${driverInfo.truckTypes || "N/A"}`
                : "Loading..."}
            </p>
          </div>
          <button
            onClick={loadAll}
            className="px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800"
          >
            Refresh
          </button>
        </header>

        {/* Trip status legend */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3">
          <p className="text-[11px] text-slate-400 mb-2 font-medium">Trip Progress</p>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 flex-wrap">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Accepted</span>
            <span>→</span>
            <span className="px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">On Trip 🚛</span>
            <span>→</span>
            <span className="px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30">Completed ✅</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-2 text-xs rounded-lg font-medium transition ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/40 text-xs text-rose-100">
            {error}
          </div>
        )}

        {/* List */}
        {loading ? (
          <p className="text-sm text-slate-400">Loading...</p>
        ) : displayBookings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-sm">
              {activeTab === "available"
                ? "No available loads in your area right now."
                : activeTab === "active"
                ? "No active loads."
                : "No completed loads yet."}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {displayBookings.map((b) => (
              <div
                key={b.id}
                onClick={() => setSelectedBooking(b)}
                className="border border-slate-800 rounded-xl p-4 bg-slate-900/50 hover:bg-slate-900 cursor-pointer transition"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1 flex-1">
                    <div className="text-sm font-semibold text-white">
                      {b.pickup} → {b.drop}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      👤 {b.name} · 🚛 {b.vehicleType}
                    </div>
                    <div className="text-[11px] text-slate-500">🕐 {b.time}</div>
                    {b.loadDetails && (
                      <div className="text-[11px] text-slate-500">📦 {b.loadDetails}</div>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <StatusBadge status={b.status} />
                    {b.driverId === DRIVER_ID && (
                      <span className="text-[10px] text-blue-400 font-medium">Yours</span>
                    )}
                  </div>
                </div>

                {/* Quick action buttons on card */}
                {b.driverId === DRIVER_ID && (
                  <div className="mt-3 flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {b.status === "accepted" && (
                      <button
                        onClick={() => handleStartTrip(b.id)}
                        disabled={actionLoading === b.id}
                        className="px-3 py-1 text-xs rounded-full bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-50"
                      >
                        {actionLoading === b.id ? "..." : "🚛 Start Trip"}
                      </button>
                    )}
                    {b.status === "on_trip" && (
                      <button
                        onClick={() => handleCompleteTrip(b.id)}
                        disabled={actionLoading === b.id}
                        className="px-3 py-1 text-xs rounded-full bg-sky-600 hover:bg-sky-500 text-white disabled:opacity-50"
                      >
                        {actionLoading === b.id ? "..." : "🏁 Complete"}
                      </button>
                    )}
                  </div>
                )}

                <div className="mt-2 text-[11px] text-blue-400">Tap for details →</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selectedBooking && (
        <BookingDetailModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onAccept={handleAccept}
          onRelease={handleRelease}
          onStartTrip={handleStartTrip}
          onCompleteTrip={handleCompleteTrip}
        />
      )}
    </div>
  );
}