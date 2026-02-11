// src/components/PartnerModal.jsx
import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  truckType: "",
  city: "",
  notes: "",
  aadharNumber: "",
  dlNumber: "",
};

const PartnerModal = ({ onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!form.name || !form.phone || !form.truckType || !form.city) {
      setStatus({
        type: "error",
        message: "Please fill name, phone, truck type and city.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/drivers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setStatus({
        type: "success",
        message:
          "Thank you! We received your details. Our team will verify your KYC and share the ₹99 membership link.",
      });
      setForm(initialForm);
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md mx-3 rounded-2xl bg-slate-950 border border-slate-700 shadow-xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
          <div>
            <h2 className="text-base font-semibold text-slate-100">
              Become a Shifty partner
            </h2>
            <p className="text-[11px] text-slate-400">
              Share your truck and KYC details. After verification, pay ₹99 and
              start getting loads.
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
            <div className="space-y-1">
              <label className="block text-xs text-slate-300">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
                placeholder="Full name"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs text-slate-300">
                Phone (WhatsApp)<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={handleChange("phone")}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
                placeholder="10‑digit number"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs text-slate-300">
                Truck type<span className="text-red-500">*</span>
              </label>
              <select
                value={form.truckType}
                onChange={handleChange("truckType")}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
              >
                <option value="">Select truck type</option>
                <option value="mini">Mini truck (Tata Ace / pickup)</option>
                <option value="medium">Medium (14–17 ft)</option>
                <option value="heavy">Heavy (19–32 ft, trailers)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-xs text-slate-300">
                Base city<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.city}
                onChange={handleChange("city")}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
                placeholder="e.g. Anantnag, Srinagar"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs text-slate-300">
                Aadhar number
              </label>
              <input
                type="text"
                value={form.aadharNumber}
                onChange={handleChange("aadharNumber")}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
                placeholder="XXXX‑XXXX‑XXXX"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs text-slate-300">
                Driving license number
              </label>
              <input
                type="text"
                value={form.dlNumber}
                onChange={handleChange("dlNumber")}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
                placeholder="DL number as per card"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs text-slate-300">
                Anything we should know
              </label>
              <textarea
                value={form.notes}
                onChange={handleChange("notes")}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
                rows={3}
                placeholder="Routes you prefer, body type, experience, etc."
              />
            </div>

            {status.message && (
              <p
                className={`text-xs ${
                  status.type === "error"
                    ? "text-red-400"
                    : "text-emerald-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-slate-800">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full rounded-full bg-yellow-400 py-2.5 text-sm font-semibold text-slate-950 hover:bg-yellow-300 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit & request verification"}
          </button>
          <p className="mt-1 text-[11px] text-slate-500">
            After KYC approval, you’ll get a secure link to pay ₹99 membership
            and start receiving live load notifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
