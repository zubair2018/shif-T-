import { useEffect, useState } from "react";
import { API_BASE } from "./api";

function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAll = async () => {
    try {
      setLoading(true);
      setError("");

      const [bRes, dRes] = await Promise.all([
        fetch(`${API_BASE}/api/bookings`),
        fetch(`${API_BASE}/api/drivers`)
      ]);

      const bJson = bRes.ok ? await bRes.json() : { bookings: [] };
      const dJson = dRes.ok ? await dRes.json() : { drivers: [] };

      setBookings(Array.isArray(bJson.bookings) ? bJson.bookings : []);
      setDrivers(Array.isArray(dJson.drivers) ? dJson.drivers : []);
    } catch (_err) {
      setError("Could not load data. API may be offline.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const updateBookingStatus = async (id, status) => {
    await fetch(`${API_BASE}/api/bookings/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });
    fetchAll();
  };

  const setDriverStatus = async (id, status) => {
    await fetch(`${API_BASE}/api/drivers/${id}/${status === "verified" ? "verify" : "reject"}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes: "Updated from admin panel" })
    });
    fetchAll();
  };

  if (loading) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-200">Loading admin data…</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="text-2xl font-semibold mb-4">Shifty Admin</h1>
        {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

        <section className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Bookings</h2>
            <button onClick={fetchAll} className="text-xs px-3 py-1 rounded-full border border-slate-700 hover:border-yellow-300 hover:text-yellow-300">Refresh</button>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            {bookings.length === 0 ? (
              <p className="px-4 py-4 text-sm text-slate-400">No bookings yet. Create one from the main site.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs md:text-sm">
                  <thead className="bg-slate-800/80 text-slate-300">
                    <tr>
                      <th className="px-3 py-2 text-left">Customer</th>
                      <th className="px-3 py-2 text-left">Route</th>
                      <th className="px-3 py-2 text-left">Truck / Load</th>
                      <th className="px-3 py-2 text-left">Status</th>
                      <th className="px-3 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b) => (
                      <tr key={b.id} className="border-t border-slate-800 hover:bg-slate-800/40">
                        <td className="px-3 py-2 align-top">
                          <div className="font-medium">{b.customerName || "-"}</div>
                          <div className="text-[11px] text-slate-400">{b.customerPhone || "-"}</div>
                        </td>
                        <td className="px-3 py-2 align-top text-xs">
                          <div>{b.pickupAddress}</div>
                          <div className="text-[11px] text-slate-400">to {b.dropAddress}</div>
                        </td>
                        <td className="px-3 py-2 align-top text-xs">
                          <div>{b.truckType || "-"}</div>
                          <div className="text-[11px] text-slate-400">{b.loadDetails || "-"}</div>
                        </td>
                        <td className="px-3 py-2 align-top">
                          <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[11px] capitalize">{b.status}</span>
                        </td>
                        <td className="px-3 py-2 align-top space-y-1">
                          <button onClick={() => updateBookingStatus(b.id, "in_progress")} className="block w-full text-[11px] rounded-full bg-slate-800 px-2 py-1 hover:bg-slate-700">Mark in progress</button>
                          <button onClick={() => updateBookingStatus(b.id, "completed")} className="block w-full text-[11px] rounded-full bg-emerald-500/90 text-slate-950 px-2 py-1 hover:bg-emerald-400">Mark completed</button>
                          <button onClick={() => updateBookingStatus(b.id, "cancelled")} className="block w-full text-[11px] rounded-full bg-red-500/80 text-slate-950 px-2 py-1 hover:bg-red-400">Cancel</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Drivers</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            {drivers.length === 0 ? (
              <p className="px-4 py-4 text-sm text-slate-400">No drivers yet. Use the partner form to submit details.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs md:text-sm">
                  <thead className="bg-slate-800/80 text-slate-300">
                    <tr>
                      <th className="px-3 py-2 text-left">Driver</th>
                      <th className="px-3 py-2 text-left">Truck Types</th>
                      <th className="px-3 py-2 text-left">City</th>
                      <th className="px-3 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drivers.map((d) => (
                      <tr key={d.id} className="border-t border-slate-800 hover:bg-slate-800/40">
                        <td className="px-3 py-2 align-top">
                          <div className="font-medium">{d.name}</div>
                          <div className="text-[11px] text-slate-400">{d.phone}</div>
                        </td>
                        <td className="px-3 py-2 align-top text-xs">{d.truckTypes || "-"}</td>
                        <td className="px-3 py-2 align-top text-xs">{d.city || "-"}</td>
                        <td className="px-3 py-2 align-top space-x-2">
                          <button onClick={() => setDriverStatus(d.id, "verified")} className="px-2 py-1 rounded-full text-[11px] bg-emerald-500/90 text-slate-950">Verify</button>
                          <button onClick={() => setDriverStatus(d.id, "rejected")} className="px-2 py-1 rounded-full text-[11px] bg-red-500/80 text-slate-950">Reject</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminPage;
