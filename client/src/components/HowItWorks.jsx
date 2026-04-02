// src/components/HowItWorks.jsx
const steps = [
  {
    number: "01",
    title: "Tell us what you're moving",
    desc: "Fill a 1-minute form with pickup, drop, and whether it's house goods, mandi load, or factory material.",
    icon: "📦",
    color: "from-yellow-500/10 to-yellow-500/0",
    border: "border-yellow-500/15",
    accent: "text-yellow-400",
    dot: "bg-yellow-400",
  },
  {
    number: "02",
    title: "We ping the right trucks",
    desc: "ShifT checks mini, medium, or heavy trucks online near your pickup city and matches the best owner instantly.",
    icon: "🚛",
    color: "from-blue-500/10 to-blue-500/0",
    border: "border-blue-500/15",
    accent: "text-blue-400",
    dot: "bg-blue-400",
  },
  {
    number: "03",
    title: "You confirm and roll",
    desc: "You get the truck details. Once confirmed, the owner heads to your pickup and the trip starts — tracked live.",
    icon: "✅",
    color: "from-emerald-500/10 to-emerald-500/0",
    border: "border-emerald-500/15",
    accent: "text-emerald-400",
    dot: "bg-emerald-400",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative bg-slate-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(250,204,21,0.05),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Header — LEFT aligned */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <span className="text-[11px] text-yellow-300 font-semibold tracking-widest uppercase">How it works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            From "I need a truck"
            <br />
            to{" "}
            <span className="text-yellow-400">"on the way"</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-lg">
            No app maze, no broker hunting. A simple 3-step flow for any truck,
            any load, any distance.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-emerald-500/20" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative rounded-2xl bg-gradient-to-b ${step.color} border ${step.border} p-7 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`text-5xl font-black ${step.accent} opacity-20 select-none leading-none`}>
                  {step.number}
                </span>
                <span className="text-4xl">{step.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="md:hidden mt-5 flex justify-center">
                  <span className="text-slate-700 text-2xl">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-14 flex flex-wrap items-center gap-8">
          {[
            { dot: "bg-emerald-400", text: "Available 24/7" },
            { dot: "bg-blue-400", text: "SMS updates at every step" },
            { dot: "bg-yellow-400", text: "No advance payment" },
            { dot: "bg-purple-400", text: "Takes under 60 seconds" },
          ].map((item) => (
            <span key={item.text} className="flex items-center gap-2 text-[12px] text-slate-500">
              <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;