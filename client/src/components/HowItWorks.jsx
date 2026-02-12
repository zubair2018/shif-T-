// src/components/HowItWorks.jsx
const steps = [
  {
    title: "Tell us what you’re moving",
    desc: "You fill a 1‑minute form with pickup, drop, and whether it’s house goods, mandi load, or factory material.",
    badge: "Step 1",
  },
  {
    title: "We ping the right trucks",
    desc: "Shifty checks mini, medium, or heavy trucks that are online near your pickup city and matches the best owner.",
    badge: "Step 2",
  },
  {
    title: "You confirm and roll",
    desc: "You get the truck details and price. Once you confirm, the owner heads to your pickup and the trip starts.",
    badge: "Step 3",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="bg-slate-950 border-t border-slate-900/60 py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-yellow-300 mb-1">
              How Shifty works
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
              From “I need a truck” to “truck is on the way”
            </h2>
            <p className="mt-1 text-xs md:text-sm text-slate-400 max-w-xl">
              No app maze, no broker hunting. A simple flow that works the same
              way for mini trucks and 32 ft containers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-4 flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                  {step.badge}
                </span>
              </div>
              <h3 className="text-sm md:text-base font-semibold text-slate-50 mb-1.5">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
