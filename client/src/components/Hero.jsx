// src/components/Hero.jsx
const Hero = ({ onBookClick }) => {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center">
      {/* Fast CSS background — no external image */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_110%_50%,rgba(250,204,21,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_-10%_80%,rgba(59,130,246,0.06),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative truck silhouette — pure CSS, no image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[200px] opacity-5 select-none">
          🚛
        </div>
        <div className="absolute right-32 bottom-20 text-[80px] opacity-5 select-none">📦</div>
        <div className="absolute right-20 top-20 text-[60px] opacity-5 select-none">🗺️</div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-16 w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <span className="text-[11px] text-emerald-300 font-semibold tracking-widest uppercase">
              Live — Trusted Logistics Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-5">
            Move anything,
            <br />
            <span className="text-yellow-400 drop-shadow-[0_0_40px_rgba(250,204,21,0.5)]">
              anywhere.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-slate-300 text-lg max-w-lg mb-7 leading-relaxed font-light">
            From small city moves to full-body highway loads.{" "}
            <span className="text-slate-400">No broker drama. No hidden fees.</span>
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-7 flex-wrap">
            {[
              { value: "500+", label: "Verified Drivers" },
              { value: "1K+", label: "Trips/month" },
              { value: "3", label: "Truck types" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{stat.label}</div>
                </div>
                {i < 2 && <div className="h-7 w-px bg-slate-800" />}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={onBookClick}
              className="group px-7 py-3.5 rounded-full bg-yellow-400 text-slate-950 font-black text-sm hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.45)] hover:scale-105 active:scale-95"
            >
              Book a Truck
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a
              href="#how"
              className="px-7 py-3.5 rounded-full border border-slate-700 text-slate-300 text-sm font-medium hover:border-yellow-400/40 hover:text-yellow-300 hover:bg-yellow-400/5 transition-all"
            >
              See how it works
            </a>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap items-center gap-4">
            {["Verified drivers", "Real-time SMS updates", "No hidden charges", "24/7 support"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-[12px] text-slate-500">
                <span className="text-emerald-400 font-bold">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero;