// src/components/FeatureGrid.jsx
const features = [
  {
    title: "99.5% on-time moves",
    desc: "Smart routing and verified partners so your heavy goods reach when they should.",
    tag: "Reliability",
  },
  {
    title: "Upfront, transparent pricing",
    desc: "Instant estimates before you confirm. No after‑loading surprises or hidden fees.",
    tag: "No hidden fees",
  },
  {
    title: "Dedicated move support",
    desc: "A human operations team tracking every move and resolving issues in real time.",
    tag: "24×7 support",
  },
  {
    title: "Scale like cloud hosting",
    desc: "From one local trip to recurring moves for your business, all in one dashboard.",
    tag: "For businesses",
  },
];

const FeatureGrid = () => {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          HeavyMove for serious workloads
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-xl">
          Think of HeavyMove like infrastructure for your physical goods.
          Predictable, trackable, and ready whenever your business needs to move.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all"
            >
              <span className="inline-flex text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/40">
                {f.tag}
              </span>
              <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-xs text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
