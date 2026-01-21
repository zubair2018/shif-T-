// src/components/WhyShifty.jsx

const reasons = [
  {
    title: "All truck sizes, one tap",
    description:
      "From Ace and pickups to 12‑tyre trailers, Shifty lets you request the exact truck size you need without calling 10 different drivers.",
  },
  {
    title: "Built for Kashmir routes",
    description:
      "We work with local owners who understand valley roads, snow, traffic and season timing – especially during apple and mandi seasons.",
  },
  {
    title: "Interstate ready",
    description:
      "Plan full‑truck loads from Kashmir to other states with the same app. Ideal for factories, warehouses and large buyers.",
  },
  {
    title: "Verified owners & drivers",
    description:
      "Basic KYC, vehicle documents and route history checked so you are not dealing with unknown numbers from classifieds.",
  },
  {
    title: "Real human support",
    description:
      "A small operations team watches every booking, helps with timings, and resolves issues – not just automated messages.",
  },
  {
    title: "Simple, transparent pricing",
    description:
      "Clear estimates before you confirm. No surprise detour charges or last‑minute rate changes after loading.",
  },
];

const WhyShifty = () => {
  return (
    <section
      id="why"
      className="bg-slate-950 text-slate-100 py-12 border-t border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xl font-semibold mb-2">Why Shifty</h2>
        <p className="text-sm text-slate-400 mb-6 max-w-2xl">
          A truck platform designed around Kashmir’s reality – local mini
          trucks, long‑haul routes, and real support when things get tricky.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-slate-900 border border-slate-700 p-4"
            >
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShifty;
