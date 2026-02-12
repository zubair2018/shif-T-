// src/components/TruckOwners.jsx
const TruckOwners = ({ onPartnerClick }) => {
  return (
    <section
      id="owners"
      className="bg-slate-950 border-t border-slate-900/60 py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-yellow-300 mb-1">
              For truck owners
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-50 mb-2">
              Become a Shifty partner and get consistent work
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mb-4">
              Whether you own one mini truck or a small fleet, Shifty helps you
              get regular trips without chasing brokers all day.
            </p>

            <ul className="space-y-1.5 text-xs md:text-sm text-slate-300 mb-5">
              <li>• Keep your own pricing, talk directly to customers.</li>
              <li>• Go online/offline whenever you want work.</li>
              <li>• Fixed membership fee, no surprise cuts.</li>
            </ul>

            <button
              onClick={onPartnerClick}
              className="px-6 py-2.5 rounded-full bg-yellow-400 text-slate-950 font-semibold text-sm hover:bg-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            >
              Become a Shifty partner
            </button>

            <p className="mt-2 text-[11px] text-slate-500">
              We&apos;re starting with Kashmir and nearby routes, then expanding
              to more cities.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-4 text-xs md:text-sm text-slate-200">
            <p className="text-[11px] text-slate-400 mb-1">Example partner</p>
            <p className="font-semibold mb-1">
              Bilal, 14 ft truck owner · Anantnag
            </p>
            <p className="mb-2 text-slate-300">
              Before Shifty, he depended fully on 1–2 brokers. Now he gets city
              trips + occasional long runs without leaving the driver seat to
              hunt.
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 px-3 py-2">
                <div className="text-slate-400 mb-0.5">Average trips</div>
                <div className="text-slate-100 font-semibold">3–5 / week</div>
              </div>
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 px-3 py-2">
                <div className="text-slate-400 mb-0.5">Work mix</div>
                <div className="text-slate-100 font-semibold">
                  City + nearby
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckOwners;
