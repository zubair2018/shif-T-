// src/components/Plans.jsx
const plans = [
  {
    name: "One‑time move",
    price: "Per trip",
    highlight: false,
    badge: "For home shifting",
    features: [
      "Book once, pay once",
      "Best available truck",
      "Phone + WhatsApp updates",
    ],
    cta: "Book your move",
  },
  {
    name: "Growing business",
    price: "Custom",
    highlight: true,
    badge: "Best for shops & SMEs",
    features: [
      "Recurring moves every week",
      "Dedicated account manager",
      "Consolidated monthly invoicing",
      "Priority support during peak hours",
    ],
    cta: "Talk to sales",
  },
  {
    name: "Enterprise logistics",
    price: "Talk to us",
    highlight: false,
    badge: "High volume",
    features: [
      "Contracted rates across cities",
      "Route optimisation suggestions",
      "Detailed reports & analytics",
    ],
    cta: "Schedule a call",
  },
];

const Plans = () => {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Built like hosting, priced like logistics
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-xl">
          Whether you move goods once a year or every day, choose the level of
          service that fits your workload and cashflow.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-5 border bg-slate-900/70 flex flex-col justify-between ${
                plan.highlight
                  ? "border-yellow-400/80 shadow-[0_0_45px_rgba(250,204,21,0.3)]"
                  : "border-slate-800"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 right-4 rounded-full bg-yellow-400 text-slate-950 text-[10px] font-semibold px-2 py-0.5">
                  Popular
                </span>
              )}
              <div>
                <span className="inline-flex text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-600">
                  {plan.badge}
                </span>
                <h3 className="mt-3 text-base font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm font-bold text-yellow-400">
                  {plan.price}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-4 w-full rounded-full text-xs font-semibold py-2 ${
                  plan.highlight
                    ? "bg-yellow-400 text-slate-950 hover:bg-yellow-300"
                    : "border border-slate-700 hover:border-cyan-400"
                } transition-colors`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
