// src/components/AboutSection.jsx
const AboutShifty = () => {
  const stats = [
    { value: "500+", label: "Verified drivers" },
    { value: "3", label: "Truck categories" },
    { value: "24/7", label: "Support" },
    { value: "0", label: "Hidden fees" },
  ];

  return (
    <section id="about" className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 mb-6">
              <span className="text-[11px] text-emerald-300 font-medium tracking-widest uppercase">
                About ShifT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Making freight simple{" "}
              <span className="text-yellow-400">for everyone</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
              ShifT is a modern platform that makes booking trucks for house
              moves, office shifts, and goods transport simple and transparent.
              We connect customers with reliable truck owners, handle the
              coordination, and keep everyone updated at every step.
            </p>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Whether you are moving a single room or an entire office, ShifT
              helps you find the right vehicle, track timings, and avoid
              last-minute surprises. Our goal is to bring clarity, fair pricing,
              and professional service to local shifting.
            </p>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 text-center hover:border-yellow-500/20 transition-all"
              >
                <div className="text-3xl font-black text-yellow-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShifty;