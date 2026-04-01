// src/components/Services.jsx
const services = [
  {
    tag: "City moves",
    title: "Mini trucks & pickups",
    icon: "🛻",
    points: [
      "House shifting, furniture, small business deliveries",
      "Tata Ace, Bolero pickup, small cargo vehicles",
    ],
    color: "from-yellow-500/10 to-transparent",
    border: "border-yellow-500/20",
    tagColor: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  },
  {
    tag: "Regional & state",
    title: "Medium trucks (14–19 ft)",
    icon: "🚛",
    points: [
      "Mandi loads, warehouse to warehouse runs",
      "Good for 3–8 tons depending on body type",
    ],
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20",
    tagColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  {
    tag: "Long haul",
    title: "Heavy & container trucks",
    icon: "🏗️",
    points: [
      "Factory dispatch, cold chain, apple and fruit movements",
      "Interstate containers and full body trucks",
    ],
    color: "from-emerald-500/10 to-transparent",
    border: "border-emerald-500/20",
    tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header — left aligned */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1.5 mb-4">
            <span className="text-[11px] text-yellow-300 font-medium tracking-widest uppercase">
              Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            From mini pickups to{" "}
            <span className="text-yellow-400">full-body trucks</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            You don't have to know truck jargon. Tell us where from, where to,
            and what you're moving — we pick the right vehicle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl bg-gradient-to-b ${s.color} border ${s.border} p-6 flex flex-col hover:scale-[1.02] transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${s.tagColor}`}>
                  {s.tag}
                </span>
                <span className="text-3xl">{s.icon}</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-3">
                {s.title}
              </h3>
              <ul className="space-y-2 mt-auto">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs md:text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;