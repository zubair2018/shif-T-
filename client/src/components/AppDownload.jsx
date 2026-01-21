// src/components/AppDownload.jsx
const AppDownload = () => {
  return (
    <section id="download" className="bg-slate-900 border-y border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Book on web today, mobile app tomorrow.
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-md">
            Start with the web version and soon install the dedicated app
            for faster bookings, live tracking, and instant alerts.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <div className="h-11 w-36 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold">
              Play Store (coming soon)
            </div>
            <div className="h-11 w-36 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold">
              App Store (coming soon)
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
          <p className="text-xs text-slate-300">
            Add your phone number and get a link to book your next move:
          </p>
          <form className="mt-4 flex flex-col sm:flex-row gap-3">
            <input
              type="tel"
              placeholder="Enter phone number"
              className="flex-1 rounded-full bg-slate-900 border border-slate-700 px-4 py-2 text-xs outline-none focus:border-yellow-400"
            />
            <button className="rounded-full bg-yellow-400 text-slate-950 text-xs font-semibold px-5 py-2 hover:bg-yellow-300">
              Get link
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
