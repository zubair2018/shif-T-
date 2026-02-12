// src/components/AboutSection.jsx
const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 border-t border-slate-900/60 py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50 mb-3">
          About Shifty
        </h2>

        <p className="text-xs md:text-sm text-slate-400 max-w-2xl mb-3">
          Shifty started with a simple observation in Kashmir: people still
          depend on broker calls and favours to arrange trucks, even for
          everyday loads. We&apos;re building a clean, app‑like way to get a
          trusted truck without losing that local trust.
        </p>

        <p className="text-xs md:text-sm text-slate-400 max-w-2xl mb-3">
          We do two things very well: match customers with the right mini,
          medium, or heavy trucks, and keep local owners at the center. No
          confusing pricing, no dark commissions. Just clear trips that make
          sense for both sides.
        </p>

        <p className="text-xs md:text-sm text-slate-400 max-w-2xl">
          Shifty is starting in Anantnag and nearby routes, then expanding
          organically. The goal is not to replace the existing network, but to
          give it a modern, reliable layer so work flows smoothly and everyone
          earns better.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
