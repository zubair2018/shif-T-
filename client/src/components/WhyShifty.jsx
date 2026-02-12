// src/components/WhyShifty.jsx
const reasons = [
  {
    title: "Verified local owners",
    desc: "We onboard local truck owners, verify them once, and you keep getting reliable vehicles when you need them.",
  },
  {
    title: "No app learning curve",
    desc: "Most customers still prefer WhatsApp and calls. Shifty works with simple forms and human support behind the scenes.",
  },
  {
    title: "Designed for Indian routes",
    desc: "From Kashmir apple trips to local mandi runs, the product is shaped around real Indian freight patterns.",
  },
];

const WhyShifty = () => {
  return (
    <section
      id="why"
      className="bg-slate-950 border-t border-slate-900/60 py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 md:mb-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-yellow-300 mb-1">
            Why Shifty
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Built for real‑world logistics, not just apps
          </h2>
          <p className="mt-1 text-xs md:text-sm text-slate-400 max-w-xl">
            Shifty is a bridge between traditional truck owners and modern
            customers who want reliability without complicated tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-4"
            >
              <h3 className="text-sm md:text-base font-semibold text-slate-50 mb-1.5">
                {r.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-400">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShifty;
