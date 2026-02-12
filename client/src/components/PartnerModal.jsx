// src/components/PartnerModal.jsx
import { useState } from "react";

const API_BASE = "http://localhost:4000";

const initialForm = {
  name: "",
  phone: "",
  city: "",
  truckType: "",
  truckCategory: "mini",
  notes: "",
  aadharNumber: "",
  dlNumber: "",
};

const PartnerModal = ({ onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch(`${API_BASE}/api/drivers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setStatus("Could not submit. Try again.");
        return;
      }

      setStatus("Submitted. We will contact you soon.");
      setForm(initialForm);
    } catch (err) {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-slate-800 p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold text-slate-50">
            Become a Shifty partner
          </h2>
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-slate-200"
          >
            Close
          </button>
        </div>

        <p className="text-[11px] text-slate-400 mb-3">
          Share your details. We&apos;ll verify you once, then send you trips
          whenever you&apos;re online.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-slate-300">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-2 py-1.5"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-slate-300">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-2 py-1.5"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-slate-300">City</label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-2 py-1.5"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-slate-300">Truck category</label>
              <select
                name="truckCategory"
                value={form.truckCategory}
                onChange={handleChange}
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-2 py-1.5"
              >
                <option value="mini">Mini</option>
                <option value="medium">Medium</option>
                <option value="heavy">Heavy</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-slate-300">Truck type</label>
            <input
              name="truckType"
              value={form.truckType}
              onChange={handleChange}
              placeholder="Tata Ace, 14 ft, 32 ft container..."
              className="w-full rounded-md bg-slate-900 border border-slate-700 px-2 py-1.5"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-slate-300">Aadhar (optional)</label>
              <input
                name="aadharNumber"
                value={form.aadharNumber}
                onChange={handleChange}
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-2 py-1.5"
              />
            </div>
            <div>
              <label className="block mb-1 text-slate-300">DL number (optional)</label>
              <input
                name="dlNumber"
                value={form.dlNumber}
                onChange={handleChange}
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-2 py-1.5"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-slate-300">
              Notes (routes, timings, etc.)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-md bg-slate-900 border border-slate-700 px-2 py-1.5"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-1 rounded-full bg-yellow-400 text-slate-950 font-semibold py-2 text-xs hover:bg-yellow-300"
          >
            Submit details
          </button>

          {status && (
            <p className="mt-1 text-[11px] text-slate-400">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PartnerModal;
