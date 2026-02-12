// src/components/Services.jsx
const services = [
  {
    tag: "City moves",
    title: "Mini trucks & pickups",
    points: [
      "House shifting, furniture, small business deliveries",
      "Tata Ace, Bolero pickup, small cargo vehicles",
    ],
  },
  {
    tag: "Regional & state",
    title: "Medium trucks (14–19 ft)",
    points: [
      "Mandi loads, warehouse to warehouse runs",
      "Good for 3–8 tons depending on body type",
    ],
  },
  {
    tag: "Long haul",
    title: "Heavy & container trucks",
    points: [
      "Factory dispatch, cold chain, apple and fruit movements",
      "Interstate containers and full body trucks",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-950 border-t border-slate-900/60 py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-yellow-300 mb-1">
              Services
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
              From mini pickups to full‑body trucks
            </h2>
            <p className="mt-1 text-xs md:text-sm text-slate-400 max-w-xl">
              You don&apos;t have to know truck jargon. You just tell us where
              from, where to, and what you&apos;re moving — we pick the right
              vehicle.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-4 flex flex-col"
            >
              <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300 mb-2">
                {s.tag}
              </span>
              <h3 className="text-sm md:text-base font-semibold text-slate-50 mb-2">
                {s.title}
              </h3>
              <ul className="space-y-1.5 text-xs md:text-sm text-slate-400">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-1.5">
                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    <span>{p}</span>
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
