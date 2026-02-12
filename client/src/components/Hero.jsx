// src/components/Hero.jsx
const Hero = ({ onBookClick }) => {
  return (
    <section
      id="top"
      className="relative pt-10 pb-10 md:pt-12 md:pb-14"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5205123/pexels-photo-5205123.jpeg')",
        }}
      />
      {/* Dark gradient overlay similar to old background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-900/95" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left: main copy (unchanged text and styles) */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-2.5 py-1 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-slate-300">
              *Shifty · book trusted trucks
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-3">
            Mini to factory‑level trucks,{" "}
            <span className="block text-yellow-400">
              booked in seconds.
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-xl mb-5">
            From small city moves to full‑body highway loads, Shifty connects
            you to verified local truck owners without broker drama.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <button
              onClick={onBookClick}
              className="px-6 py-2.5 rounded-full bg-yellow-400 text-slate-950 font-semibold text-sm hover:bg-yellow-300 shadow-[0_0_24px_rgba(250,204,21,0.55)]"
            >
              Book a truck
            </button>
            <a
              href="#how"
              className="px-6 py-2.5 rounded-full border border-slate-600 text-slate-200 text-sm hover:border-yellow-300 hover:text-yellow-300 transition-colors"
            >
              See how it works
            </a>
          </div>

          <p className="text-[11px] text-slate-400">
            Share pickup, drop, and what you&apos;re moving — we match the right
            truck and owner, then you confirm.
          </p>
        </div>

        {/* Right side now empty / spacer so layout stays similar */}
        <div className="flex-1 w-full md:w-auto" />
      </div>
    </section>
  );
};

export default Hero;
