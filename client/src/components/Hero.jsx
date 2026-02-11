// src/components/Hero.jsx
const Hero = ({ onBookClick }) => {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-20 pb-12 md:pt-24 md:pb-16"
    >
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left text block */}
        <div className="flex-1">
          <p className="text-[11px] uppercase tracking-[0.2em] text-yellow-300 mb-2">
            Same day trucks · Pan‑city
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
            Book any truck,{" "}
            <span className="text-yellow-400">
              from mini to full‑body.
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-xl mb-5">
            One place to move anything: mini trucks for city drops, medium
            trucks for mandis and warehouses, and heavy trucks for factory
            loads and long highway routes.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <button
              onClick={onBookClick}
              className="px-6 py-2.5 rounded-full bg-yellow-400 text-slate-950 font-semibold text-sm hover:bg-yellow-300 shadow-[0_0_24px_rgba(250,204,21,0.5)]"
            >
              Book a truck
            </button>
            <a
              href="#services"
              className="px-6 py-2.5 rounded-full border border-slate-600 text-slate-200 text-sm hover:border-yellow-300 hover:text-yellow-300 transition-colors"
            >
              Explore services
            </a>
          </div>

          <p className="text-[11px] text-slate-400">
            No call‑center drama: you share basic details, we match you to the
            right truck and local **owner** in minutes.
          </p>
        </div>

        {/* Right visual block */}
        <div className="flex-1 w-full md:w-auto">
          <div className="relative mx-auto max-w-sm rounded-3xl bg-slate-900 border border-slate-700/80 p-4 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            <div className="absolute -top-3 -right-3 px-2 py-1 rounded-full bg-emerald-500 text-[10px] font-semibold text-slate-950 shadow">
              Live in Anantnag
            </div>

            <div className="mb-3">
              <p className="text-[11px] text-slate-400 mb-1">
                Sample booking
              </p>
              <p className="text-sm font-medium text-slate-100">
                Sopore → Delhi · 8 tons apples
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Pickup</span>
                <span className="font-medium">Sopore mandi</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Drop</span>
                <span className="font-medium">Okhla, Delhi</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Truck</span>
                <span className="font-medium">32 ft container</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
              <span>Verified Shifty partner</span>
              <span className="inline-flex items-center gap-1 text-emerald-400">
                ●
                <span>Online drivers nearby</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
