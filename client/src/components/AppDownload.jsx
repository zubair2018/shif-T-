// src/components/AppDownload.jsx
const AppDownload = () => {
  return (
    <section id="download" className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(250,204,21,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800/80 border border-slate-700/60 p-8 md:p-12 overflow-hidden relative">

          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center gap-10">

            {/* Left */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1.5 mb-6">
                <span className="text-[11px] text-yellow-300 font-medium tracking-widest uppercase">
                  Coming soon
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ShifT on your phone{" "}
                <span className="text-yellow-400">soon</span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base mb-6 max-w-md leading-relaxed">
                We're starting with a simple web interface and SMS coordination,
                then rolling out the full Android app for both customers and
                drivers.
              </p>
              <button className="px-6 py-3 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-sm font-medium hover:bg-yellow-400/20 transition-all">
                Get early access →
              </button>
              <p className="text-[11px] text-slate-500 mt-3">
                Share your number in the booking form and we'll send you the
                app link when ready.
              </p>
            </div>

            {/* Right — Preview card */}
            <div className="flex-1 w-full max-w-xs mx-auto">
              <div className="rounded-2xl bg-slate-950/80 border border-slate-700 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-slate-400">Upcoming feature</span>
                  <span className="rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-[10px] px-2 py-0.5">
                    Driver app
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: "🟢", text: "Go online/offline instantly" },
                    { icon: "📍", text: "See nearby loads on a map" },
                    { icon: "✅", text: "Accept trips with one tap" },
                    { icon: "📊", text: "Track your earnings daily" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-xs text-slate-300">
                      <span>{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 text-[10px] text-slate-500">
                  Test the core flow using our web tools before the app hits
                  the Play Store.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;