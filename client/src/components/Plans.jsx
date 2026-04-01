// src/components/Plans.jsx
const plans = [
  {
    name: "One-time move",
    price: "Per trip",
    highlight: false,
    badge: "For home shifting",
    icon: "🏠",
    features: [
      "Book once, pay once",
      "Best available truck",
      "Phone + SMS updates",
    ],
    cta: "Book your move",
  },
  {
    name: "Growing business",
    price: "Custom pricing",
    highlight: true,
    badge: "Most popular",
    icon: "📈",
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
    icon: "🏭",
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
    <section className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(250,204,21,0.03)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header — left aligned */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1.5 mb-4">
            <span className="text-[11px] text-yellow-300 font-medium tracking-widest uppercase">
              Pricing
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Simple pricing,{" "}
            <span className="text-yellow-400">no surprises</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            Whether you move goods once a year or every day, choose the level
            of service that fits your workload and cashflow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                plan.highlight
                  ? "bg-gradient-to-b from-yellow-500/10 to-transparent border-yellow-400/40 shadow-[0_0_40px_rgba(250,204,21,0.15)]"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 text-slate-950 text-[10px] font-bold px-3 py-0.5 whitespace-nowrap">
                  ⭐ Most Popular
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
                    plan.highlight
                      ? "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
                      : "bg-slate-800 text-slate-300 border-slate-700"
                  }`}>
                    {plan.badge}
                  </span>
                  <span className="text-2xl">{plan.icon}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className={`text-sm font-semibold mb-4 ${plan.highlight ? "text-yellow-400" : "text-slate-300"}`}>
                  {plan.price}
                </p>

                <ul className="space-y-2.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className={`mt-0.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${plan.highlight ? "bg-yellow-400" : "bg-slate-500"}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-6 w-full rounded-full text-sm font-semibold py-2.5 transition-all ${
                  plan.highlight
                    ? "bg-yellow-400 text-slate-950 hover:bg-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                    : "border border-slate-700 text-slate-200 hover:border-yellow-400/50 hover:text-yellow-300"
                }`}
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