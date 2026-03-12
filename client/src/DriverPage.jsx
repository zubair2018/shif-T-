import { useState } from "react";
import { API_BASE } from "./api";

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
      const data = res.ok ? await res.json() : { bookings: [] };
      const all = Array.isArray(data.bookings) ? data.bookings : [];
      const mine = all.filter((b) => b.assignedDriverId === driverId || b.status === "pending");
      setBookings(mine);

      if (mine.length === 0) setStatusMsg("No open or assigned bookings yet.");
    } catch (_err) {
      setStatusMsg("Could not load bookings.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatus = async (bookingId, status) => {
    await fetch(`${API_BASE}/api/bookings/${bookingId}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });
    fetchBookings();
  };

  const handleAccept = async (bookingId) => {
    await fetch(`${API_BASE}/api/bookings/${bookingId}/accept`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ driverId })
    });
    fetchBookings();
  };

  const handleReject = async (bookingId) => {
    await fetch(`${API_BASE}/api/bookings/${bookingId}/reject`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    fetchBookings();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-md px-4 py-6">
        <h1 className="text-xl font-semibold mb-4">Shifty Driver</h1>

        <div className="mb-4 space-y-2">
          <label className="block text-xs text-slate-300">Enter your driver ID</label>
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

        {statusMsg && <p className="mb-3 text-xs text-slate-400">{statusMsg}</p>}

        <div className="space-y-3">
          {bookings.map((b) => (
            <div key={b.id} className="rounded-2xl bg-slate-900 border border-slate-800 p-3 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold">{b.pickupAddress} → {b.dropAddress}</span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px]">{b.status}</span>
              </div>
              <div className="text-[11px] text-slate-400 mb-2">{b.customerName} · {b.customerPhone}</div>

              <div className="flex flex-wrap gap-2 mt-2">
                {b.status === "pending" && (
                  <button onClick={() => handleAccept(b.id)} className="flex-1 rounded-full bg-emerald-500/90 text-slate-950 py-1">Accept</button>
                )}
                {b.status === "assigned" && b.assignedDriverId === driverId && (
                  <button onClick={() => handleReject(b.id)} className="flex-1 rounded-full bg-red-500/80 text-slate-950 py-1">Reject</button>
                )}
                {(b.status === "assigned" || b.status === "pending") && b.assignedDriverId === driverId ? (
                  <button onClick={() => handleStatus(b.id, "in_progress")} className="flex-1 rounded-full bg-slate-800 py-1">Start trip</button>
                ) : null}
                {b.status === "in_progress" && b.assignedDriverId === driverId && (
                  <button onClick={() => handleStatus(b.id, "completed")} className="flex-1 rounded-full bg-yellow-400 text-slate-950 py-1">Complete trip</button>
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
