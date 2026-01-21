// src/components/StatsStrip.jsx
const StatsStrip = () => {
  const stats = [
    { label: "Trips completed", value: "10K+" },
    { label: "Verified trucks", value: "500+" },
    { label: "Avg rating", value: "4.8" },
  ];

  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-3 gap-4 text-center text-xs sm:text-sm">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col">
            <span className="font-semibold text-yellow-400 text-base sm:text-lg">
              {item.value}
            </span>
            <span className="text-slate-400 mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
