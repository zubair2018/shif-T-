// src/components/AppDownload.jsx
const AppDownload = () => {
  return (
    <section
      id="download"
      className="bg-slate-950 border-t border-slate-900/60 py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border border-slate-700/80 p-5 md:p-6 flex flex-col md:flex-row items-center gap-5">
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-[0.2em] text-yellow-300 mb-1">
              Mobile first
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-50 mb-2">
              Shifty on your phone soon
            </h2>
            <p className="text-xs md:text-sm text-slate-300 mb-4 max-w-md">
              We&apos;re starting with a simple web interface and WhatsApp
              coordination, then rolling out the full Android app for both
              customers and drivers.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="px-4 py-2 rounded-full bg-slate-950 text-slate-200 text-xs md:text-sm border border-slate-600 hover:border-yellow-300 hover:text-yellow-300">
                Get early access link
              </button>
              <span className="text-[11px] text-slate-400">
                Share your number in the booking form and we&apos;ll send you
                the app link when ready.
              </span>
            </div>
          </div>

          <div className="flex-1 w-full md:w-auto">
            <div className="mx-auto max-w-xs rounded-3xl bg-slate-950/90 border border-slate-700 p-3 text-[11px] text-slate-300">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-slate-400">Upcoming feature</span>
                <span className="rounded-full bg-yellow-400/10 text-yellow-300 px-2 py-0.5">
                  Driver app
                </span>
              </div>
              <p className="mb-2">
                Drivers go online/offline, see nearby loads, accept trips, and
                update status — all from a simple interface.
              </p>
              <p className="text-slate-500">
                You can already test the core flow using our web tools before
                the app hits the Play Store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
