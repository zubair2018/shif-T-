// src/DriverPage.jsx
import { useEffect, useState } from "react";

const API_BASE = "http://localhost:4000";

function DriverPage() {
  const [driverId, setDriverId] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const fetchBookings = async () => {
    if (!driverId) return;
    try {
      setLoading(true);
      setStatusMsg("");
      const res = await fetch(`${API_BASE}/api/bookings`);
      const data = res.ok ? await res.json() : [];
      const mine = data.filter(
        (b) => b.assignedDriver && b.assignedDriver._id === driverId
      );
      setBookings(mine);
      if (mine.length === 0) {
        setStatusMsg("No bookings assigned to you yet.");
      }
    } catch (err) {
      setStatusMsg("Could not load bookings.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatus = async (bookingId, status) => {
    try {
      await fetch(`${API_BASE}/api/bookings/${bookingId}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      fetchBookings();
    } catch {}
  };

  const handleAccept = async (bookingId) => {
    try {
      await fetch(`${API_BASE}/api/bookings/${bookingId}/accept`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driverId }),
      });
      fetchBookings();
    } catch {}
  };

  const handleReject = async (bookingId) => {
    try {
      await fetch(`${API_BASE}/api/bookings/${bookingId}/reject`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driverId }),
      });
      fetchBookings();
    } catch {}
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-md px-4 py-6">
        <h1 className="text-xl font-semibold mb-4">Shifty Driver</h1>

        <div className="mb-4 space-y-2">
          <label className="block text-xs text-slate-300">
            Enter your driver ID (from admin)
          </label>
          <input
            value={driverId}
            onChange={(e) => setDriverId(e.target.value.trim())}
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
            placeholder="Paste your ID"
          />
          <button
            onClick={fetchBookings}
            disabled={!driverId}
            className="mt-1 w-full rounded-full bg-yellow-400 py-2 text-sm font-semibold text-slate-950 disabled:opacity-60"
          >
            {loading ? "Loading..." : "Load my bookings"}
          </button>
        </div>

        {statusMsg && (
          <p className="mb-3 text-xs text-slate-400">{statusMsg}</p>
        )}

        <div className="space-y-3">
          {bookings.map((b) => (
            <div
              key={b._id}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-3 text-xs"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold">
                  {b.pickupCity} → {b.dropCity}
                </span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px]">
                  {b.status}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 mb-2">
                {b.customerName} · {b.customerPhone}
              </div>
              <div className="mb-2">
                <div className="text-[11px] text-slate-400">Pickup</div>
                <div>{b.pickupAddress}</div>
              </div>
              <div className="mb-2">
                <div className="text-[11px] text-slate-400">Drop</div>
                <div>{b.dropAddress}</div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {b.status === "ASSIGNED" && (
                  <>
                    <button
                      onClick={() => handleAccept(b._id)}
                      className="flex-1 rounded-full bg-emerald-500/90 text-slate-950 py-1"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(b._id)}
                      className="flex-1 rounded-full bg-red-500/80 text-slate-950 py-1"
                    >
                      Reject
                    </button>
                  </>
                )}
                {b.status === "ASSIGNED" || b.status === "PENDING" ? (
                  <button
                    onClick={() => handleStatus(b._id, "IN_PROGRESS")}
                    className="flex-1 rounded-full bg-slate-800 py-1"
                  >
                    Start trip
                  </button>
                ) : null}
                {b.status === "IN_PROGRESS" && (
                  <button
                    onClick={() => handleStatus(b._id, "COMPLETED")}
                    className="flex-1 rounded-full bg-yellow-400 text-slate-950 py-1"
                  >
                    Complete trip
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DriverPage;
