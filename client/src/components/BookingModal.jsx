// src/components/BookingModal.jsx
import { useState } from "react";

const initialForm = {
  customerName: "",
  customerPhone: "",
  pickupAddress: "",
  dropAddress: "",
  loadType: "mini",
  weightTons: "",
};

const BookingModal = ({ onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:4000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          weightTons: form.weightTons ? Number(form.weightTons) : undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to create booking");
      }

      const data = await res.json();
      setStatus(
        `Booking created. We matched ${data.driverCount || 0} drivers for your load.`
      );
      setForm(initialForm);
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      {/* Mobile-safe card */}
      <div className="w-full max-w-md mx-3 rounded-2xl bg-slate-950 border border-slate-700 shadow-xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
          <div>
            <h2 className="text-base font-semibold text-white">Book a move</h2>
            <p className="text-[11px] text-slate-400">
              Share basic details, our team matches you with the right truck.
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-3 text-slate-400 hover:text-slate-200 text-sm"
          >
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div className="px-4 py-3 overflow-y-auto text-sm">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] mb-1">Your name</label>
                <input
                  name="customerName"
                  value={form.customerName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] mb-1">Phone number</label>
                <input
                  name="customerPhone"
                  value={form.customerPhone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] mb-1">
                  Pickup address (with city)
                </label>
                <input
                  name="pickupAddress"
                  value={form.pickupAddress}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] mb-1">
                  Drop address (with city)
                </label>
                <input
                  name="dropAddress"
                  value={form.dropAddress}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] mb-1">Load type</label>
                <select
                  name="loadType"
                  value={form.loadType}
                  onChange={handleChange}
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-xs"
                >
                  <option value="mini">Mini trucks – within city</option>
                  <option value="medium">
                    Medium trucks – city & regional
                  </option>
                  <option value="heavy">
                    Heavy & interstate – factories, full truck
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] mb-1">
                  Approx weight (tons)
                </label>
                <input
                  name="weightTons"
                  value={form.weightTons}
                  onChange={handleChange}
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
                />
              </div>
            </div>

            {status && (
              <p className="text-[11px] text-yellow-300 mt-1">{status}</p>
            )}
          </form>
        </div>

        {/* Footer button fixed to bottom of card */}
        <div className="px-4 py-3 border-t border-slate-800">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full rounded-full bg-yellow-400 text-slate-950 font-semibold py-2.5 text-sm hover:bg-yellow-300 disabled:opacity-70"
          >
            {loading ? "Booking..." : "Submit booking"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
