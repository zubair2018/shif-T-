// src/components/HowItWorks.jsx
const steps = [
  {
    title: "Enter pickup & drop",
    desc: "Add locations, date, and type of goods. See instant estimates based on distance and truck size.",
  },
  {
    title: "Choose truck & time",
    desc: "Pick from available trucks and slots. Your driver details and vehicle number are shared instantly.",
  },
  {
    title: "Track and pay",
    desc: "Track your move live and pay after loading or on delivery via UPI, cash, or bank transfer.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          How it works
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-md">
          A simple three-step flow from booking to delivery designed for heavy
          goods and full-truck-load moves.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <div className="absolute -top-3 left-4 h-7 w-7 rounded-full bg-yellow-400 text-slate-950 text-xs font-bold flex items-center justify-center">
                {index + 1}
              </div>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-xs text-slate-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
