// src/components/BookingModal.jsx
import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  pickup: "",
  dropoff: "",
  date: "",
  time: "",
  goodsType: "",
  size: "small",
};

const BookingModal = ({ onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // basic client-side validation
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 7) {
      alert("Please enter a valid phone number");
      setSubmitting(false);
      return;
    }

    try {
      const base = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const res = await fetch(`${base}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Request failed");
      }

      await res.json();
      alert("Booking created! You will get a call soon.");
      setForm(initialForm);
      onClose();
    } catch (err) {
      console.error(err);
      alert(err.message || "Could not create booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 text-sm"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-[1.4fr_1fr]">
          {/* Form side */}
          <div className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Book your heavy move
            </h2>
            <p className="mt-2 text-xs md:text-sm text-slate-300">
              Share your move details and Shifty will assign a suitable truck
              and driver.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3 text-xs">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-yellow-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-yellow-400"
                    placeholder="10-digit mobile"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    Pickup address
                  </label>
                  <input
                    name="pickup"
                    value={form.pickup}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-yellow-400"
                    placeholder="e.g. Rajbagh, Srinagar"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    Drop address
                  </label>
                  <input
                    name="dropoff"
                    value={form.dropoff}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-yellow-400"
                    placeholder="e.g. Baramulla"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    Truck size
                  </label>
                  <select
                    name="size"
                    value={form.size}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-yellow-400"
                  >
                    <option value="small">Small (pickup / mini)</option>
                    <option value="medium">Medium (14 ft)</option>
                    <option value="large">Large (17–19 ft)</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-yellow-400"
                  />
                </div>
                <div />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">
                  Type of goods
                </label>
                <textarea
                  name="goodsType"
                  value={form.goodsType}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-yellow-400 resize-none"
                  placeholder="Household, furniture, construction material, etc."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <p className="text-[11px] text-slate-400">
                  You will get a confirmation call within 10–15 minutes.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-slate-700 px-4 py-2 text-[11px] font-semibold hover:border-slate-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-yellow-400 text-slate-950 px-5 py-2 text-[11px] font-semibold hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Booking..." : "Request booking"}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Summary side */}
          <div className="hidden md:block bg-gradient-to-br from-yellow-500/20 via-slate-900 to-slate-950 border-l border-slate-800 p-6">
            <p className="text-[11px] uppercase tracking-wide text-yellow-300 mb-4">
              Summary
            </p>
            <div className="space-y-3 text-xs text-slate-200">
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-3">
                <p className="text-[11px] text-slate-400 mb-1">Route</p>
                <p className="font-semibold">
                  {form.pickup || "Pickup"} → {form.dropoff || "Drop"}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">{form.date} {form.time}</p>
              </div>
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-3">
                <p className="text-[11px] text-slate-400 mb-1">Chosen truck</p>
                <p className="font-semibold capitalize">
                  {form.size} truck
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Perfect for house shifting and bulk goods.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-3">
                <p className="text-[11px] text-slate-400 mb-1">
                  Estimated pricing
                </p>
                <p className="font-semibold text-yellow-300">
                  Upfront quote after confirmation call
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  No hidden charges. Pay after loading is confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
