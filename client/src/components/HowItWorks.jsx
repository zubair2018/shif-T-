// src/components/HowItWorks.jsx
const steps = [
  {
    number: "01",
    title: "Tell us what you're moving",
    desc: "Fill a 1-minute form with pickup, drop, and whether it's house goods, mandi load, or factory material.",
    badge: "Step 1",
    icon: "📦",
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/20",
    glow: "shadow-[0_0_30px_rgba(234,179,8,0.1)]",
  },
  {
    number: "02",
    title: "We ping the right trucks",
    desc: "ShifT checks mini, medium, or heavy trucks that are online near your pickup city and matches the best owner.",
    badge: "Step 2",
    icon: "🚛",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.1)]",
  },
  {
    number: "03",
    title: "You confirm and roll",
    desc: "You get the truck details and price. Once confirmed, the owner heads to your pickup and the trip starts.",
    badge: "Step 3",
    icon: "✅",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.1)]",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="relative bg-slate-950 py-16 md:py-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(234,179,8,0.03)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1.5 mb-4">
            <span className="text-[11px] text-yellow-300 font-medium tracking-widest uppercase">
              How it works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From "I need a truck" to{" "}
            <span className="text-yellow-400">"on the way"</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            No app maze, no broker hunting. A simple flow that works the same
            way for mini trucks and 32 ft containers.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-emerald-500/20" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative rounded-2xl bg-gradient-to-b ${step.color} border ${step.border} ${step.glow} p-6 flex flex-col group hover:scale-[1.02] transition-all duration-300`}
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-5">
                <div className="text-4xl font-black text-white/5 select-none">
                  {step.number}
                </div>
                <div className="text-3xl">{step.icon}</div>
              </div>

              {/* Badge */}
              <span className="inline-flex items-center rounded-full bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 text-[10px] text-slate-300 font-medium w-fit mb-3">
                {step.badge}
              </span>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {step.desc}
              </p>

              {/* Arrow for non-last items */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-4 text-slate-600 text-center text-xl">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 text-sm mb-2">
            Takes less than 60 seconds to book
          </p>
          <div className="flex items-center justify-center gap-6 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Available 24/7
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              SMS updates
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              No advance payment
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;