// src/components/Testimonials.jsx
const testimonials = [
  {
    name: "Bilal, Contractor",
    text: "Booking trucks for materials is now faster and more reliable than calling multiple drivers manually.",
  },
  {
    name: "Ayesha, Home owner",
    text: "Our 2BHK move finished on time and we could track the truck location throughout the day.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Loved by early users
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-md">
          Early customers trust the platform for punctual moves, transparent
          pricing, and responsive support.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <p className="text-xs text-slate-300">“{t.text}”</p>
              <p className="mt-3 text-xs font-semibold text-slate-100">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
