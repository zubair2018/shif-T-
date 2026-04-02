// src/components/AboutSection.jsx
const AboutShifty = () => {
  const stats = [
    { value: "500+", label: "Verified drivers", icon: "🚛" },
    { value: "3", label: "Truck categories", icon: "📦" },
    { value: "24/7", label: "Support available", icon: "🕐" },
    { value: "₹0", label: "Hidden fees", icon: "✅" },
  ];

  return (
    <section id="about" className="relative bg-slate-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(16,185,129,0.04),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-emerald-300 font-semibold tracking-widest uppercase">About Shifty</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Making freight simple{" "}
              <span className="text-yellow-400">for everyone</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-5">
              Shifty is a modern platform that makes booking trucks for house
              moves, office shifts, and goods transport simple and transparent.
              We connect customers with reliable truck owners, handle the
              coordination, and keep everyone updated at every step.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you are moving a single room or an entire office, Shifty
              helps you find the right vehicle, track timings, and avoid
              last-minute surprises. Our goal is to bring clarity, fair pricing,
              and professional service to local shifting so you can focus on
              what matters.
            </p>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-yellow-500/20 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-yellow-400 mb-1 group-hover:scale-110 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShifty;