// src/components/WhyShifty.jsx
const reasons = [
  {
    icon: "✅",
    title: "Verified local owners",
    desc: "We onboard local truck owners, verify them once, and you keep getting reliable vehicles when you need them.",
    color: "from-emerald-500/10 to-transparent",
    border: "border-emerald-500/20",
  },
  {
    icon: "💬",
    title: "No app learning curve",
    desc: "Most customers still prefer WhatsApp and calls. ShifT works with simple forms and human support behind the scenes.",
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20",
  },
  {
    icon: "🇮🇳",
    title: "Designed for Indian routes",
    desc: "From Kashmir apple trips to local mandi runs, the product is shaped around real Indian freight patterns.",
    color: "from-yellow-500/10 to-transparent",
    border: "border-yellow-500/20",
  },
];

const WhyShifty = () => {
  return (
    <section id="why" className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(250,204,21,0.03)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header — left aligned */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1.5 mb-4">
            <span className="text-[11px] text-yellow-300 font-medium tracking-widest uppercase">
              Why ShifT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Built for real-world logistics,{" "}
            <span className="text-yellow-400">not just apps</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            ShifT is a bridge between traditional truck owners and modern
            customers who want reliability without complicated tools.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className={`rounded-2xl bg-gradient-to-b ${r.color} border ${r.border} p-6 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                {r.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShifty;