// src/components/TruckOwners.jsx
const TruckOwners = ({ onPartnerClick }) => {
  const perks = [
    { icon: "💰", text: "Keep your own pricing, talk directly to customers" },
    { icon: "🔄", text: "Go online/offline whenever you want work" },
    { icon: "📋", text: "Fixed membership fee, no surprise cuts" },
    { icon: "📍", text: "Get trips from your base area automatically" },
  ];

  return (
    <section id="owners" className="relative bg-slate-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_100%,rgba(250,204,21,0.04),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span className="text-[11px] text-yellow-300 font-semibold tracking-widest uppercase">For truck owners</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
              Become a Shify partner
              <br />
              <span className="text-yellow-400">get consistent work</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              Whether you own one mini truck or a small fleet, Shify helps you
              get regular trips without chasing brokers all day.
            </p>

            <ul className="space-y-4 mb-10">
              {perks.map((perk) => (
                <li key={perk.text} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{perk.icon}</span>
                  <span className="text-sm text-slate-300 leading-relaxed pt-0.5">{perk.text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onPartnerClick}
              className="group px-8 py-4 rounded-full bg-yellow-400 text-slate-950 font-black text-sm hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_50px_rgba(250,204,21,0.6)] hover:scale-105 active:scale-95"
            >
              Become a Shify Partner
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="mt-3 text-[11px] text-slate-600">
              Starting with Kashmir and nearby routes, expanding to more cities soon.
            </p>
          </div>

          {/* Right — Partner card */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 bg-yellow-400/5 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl bg-slate-900/80 border border-slate-700/60 p-7 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-800">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 border border-yellow-400/20 flex items-center justify-center text-2xl">
                  🚛
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Bilal Ahmad</div>
                  <div className="text-slate-400 text-xs">14 ft truck owner · Anantnag</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">★</span>
                    ))}
                    <span className="text-slate-500 text-[10px] ml-1">4.9 rating</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "Before Shify, I depended fully on 1–2 brokers. Now I get city
                trips + occasional long runs without leaving the driver seat to hunt."
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Average trips", value: "3–5/week", icon: "📅" },
                  { label: "Work mix", value: "City + nearby", icon: "🗺️" },
                  { label: "Extra income", value: "+₹18K/mo", icon: "💰" },
                  { label: "Response time", value: "Under 2 min", icon: "⚡" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-slate-950/60 border border-slate-800 p-3"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm">{stat.icon}</span>
                      <span className="text-[10px] text-slate-500">{stat.label}</span>
                    </div>
                    <div className="text-white font-bold text-sm">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* CTA strip */}
              <div className="mt-5 pt-5 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Join 500+ partners already on Shify</span>
                <span className="text-yellow-400 text-xs font-semibold">Apply now →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckOwners;