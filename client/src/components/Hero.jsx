// src/components/Hero.jsx
const Hero = ({ onBookClick }) => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs text-slate-400 mb-2">
          Shifty · book any truck in minutes
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
          Book any truck,{" "}
          <span className="text-yellow-400">
            from mini-trucks to industry level trucks.
          </span>
        </h1>

        <p className="text-slate-300 text-sm md:text-base max-w-xl mb-6">
          One place to move anything: mini trucks for city moves, bigger
          trucks for factory loads, and interstate trips like apple transport
          from Kashmir to other states.
        </p>

        {/* CTA buttons only */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button
            onClick={onBookClick}
            className="px-6 py-2.5 rounded-full bg-yellow-400 text-slate-950 font-semibold text-sm hover:bg-yellow-300"
          >
            Book a truck
          </button>
          <button
            className="px-6 py-2.5 rounded-full border border-slate-600 text-slate-200 text-sm hover:border-yellow-300 hover:text-yellow-300"
          >
            Explore Shifty
          </button>
        </div>

        <p className="mt-2 text-[11px] text-slate-400">
          No call‑center drama: share basic details, and our team matches you
          with the right truck size from local owners.
        </p>
      </div>
    </section>
  );
};

export default Hero;
