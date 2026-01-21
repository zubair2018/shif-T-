// src/components/PartnerModal.jsx
import { useState } from "react";

const PartnerModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    truckType: "",
    city: "",
    notes: "",
  });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:4000/api/owners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setForm({
        name: "",
        phone: "",
        truckType: "",
        city: "",
        notes: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-slate-900 p-6 rounded-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Shifty – Truck owners</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-xl"
          >
            ✕
          </button>
        </div>

        <p className="text-xs text-slate-400 mb-6">
          Submit your details and we'll contact you when customer jobs come in.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-slate-950 border border-slate-700 px-3 py-2 rounded-lg text-sm"
            required
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full bg-slate-950 border border-slate-700 px-3 py-2 rounded-lg text-sm"
            required
          />
          <input
            name="truckType"
            value={form.truckType}
            onChange={handleChange}
            placeholder="Truck type (Ace, Pickup, etc.)"
            className="w-full bg-slate-950 border border-slate-700 px-3 py-2 rounded-lg text-sm"
          />
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City / route"
            className="w-full bg-slate-950 border border-slate-700 px-3 py-2 rounded-lg text-sm"
          />
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Notes"
            rows="3"
            className="w-full bg-slate-950 border border-slate-700 px-3 py-2 rounded-lg text-sm"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-slate-950 font-semibold py-2 rounded-full text-sm hover:bg-yellow-300 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-xs text-emerald-400 text-center mt-2">
              Thanks! Your details are submitted.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-red-400 text-center mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PartnerModal;
