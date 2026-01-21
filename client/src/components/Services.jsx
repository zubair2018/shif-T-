// src/components/Services.jsx
const services = [
  {
    title: "Local mini trucks",
    tag: "WITHIN CITY & NEARBY",
    description:
      "Perfect for house shifts, shop deliveries and short‑distance goods. Quick pickup with Ace and other mini trucks in your area.",
    img: "/Untitled-design.jpg",
  },
  {
    title: "City & regional loads",
    tag: "FACTORIES • WAREHOUSES",
    description:
      "3–7 ton vehicles for factory‑to‑warehouse, mandi‑to‑shop and B2B loads across districts. Scheduled trips with trusted local fleets.",
    img: "/Untitled-design2.jpg",
  },
  {
    title: "Long‑haul & interstate",
    tag: "HEAVY & 12‑TYRE TRUCKS",
    description:
      "Full‑body and container trucks for heavy loads and seasonal transport like apples from Kashmir to other states, with live support.",
    img: "/Untitled-design3.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-950 text-slate-100 py-12 border-t border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xl font-semibold mb-2">Services we cover</h2>
        <p className="text-sm text-slate-400 mb-6 max-w-2xl">
          From short city hops to long‑distance factory loads, Shifty connects
          you to the right truck and driver for every kind of **movement**.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden flex flex-col"
            >
              <div className="h-28 w-full bg-slate-800">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[10px] uppercase tracking-wide text-yellow-300 mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-sm font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {item.description}
                  </p>
                </div>
                <button className="mt-4 inline-flex text-[11px] font-semibold text-yellow-300 hover:text-yellow-200">
                  Get estimate
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
