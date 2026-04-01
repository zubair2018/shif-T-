// src/components/Hero.jsx
const Hero = ({ onBookClick }) => {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5205123/pexels-photo-5205123.jpeg')",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-20 w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 mb-6 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-emerald-300 font-medium tracking-wide uppercase">
              Trusted Logistics Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Move anything,{" "}
            <br />
            <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.4)]">
              anywhere.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            From small city moves to full-body highway loads — ShifT connects
            you to verified local truck owners.{" "}
            <span className="text-slate-400">No broker drama. No hidden fees.</span>
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-6 mb-8 flex-wrap">
            {[
              { value: "500+", label: "Drivers" },
              { value: "1000+", label: "Trips/month" },
              { value: "3", label: "Truck types" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-[11px] text-slate-400">{stat.label}</div>
              </div>
            ))}
            <div className="h-8 w-px bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
              <span className="text-xs text-slate-400 ml-1">4.9 rated</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={onBookClick}
              className="group px-8 py-3.5 rounded-full bg-yellow-400 text-slate-950 font-bold text-sm hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] hover:scale-105 active:scale-95"
            >
              Book a Truck
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">
                →
              </span>
            </button>
            <a
              href="#how"
              className="px-8 py-3.5 rounded-full border border-slate-600 text-slate-200 text-sm hover:border-yellow-400/50 hover:text-yellow-300 hover:bg-yellow-400/5 transition-all"
            >
              How it works
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
            {[
              "Verified drivers",
              "Real-time tracking",
              "SMS notifications",
              "No hidden charges",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

    </section>
  );
};

export default Hero;