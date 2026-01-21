// src/TruckOwnerInfo.jsx
const TruckOwnerInfo = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Partner with Shifty</h1>

        <p className="text-sm text-slate-300">
          This page is for truck owners and fleets who reach us via a direct
          link or QR code. To share your details, please use the partner form
          on the main Shifty site.
        </p>

        <ul className="text-sm text-slate-300 list-disc list-inside space-y-1">
          <li>Attach any truck from mini to 12-tyre.</li>
          <li>Get local trips, factory loads and long‑route jobs.</li>
          <li>Fast WhatsApp‑first coordination with customers.</li>
        </ul>

        <a
          href="/"
          className="inline-flex px-4 py-2 rounded-full bg-yellow-400 text-slate-950 text-sm font-semibold hover:bg-yellow-300"
        >
          Go to main site
        </a>

        <p className="text-[11px] text-slate-500">
          Tip: On the home page, tap “Become a Shifty partner” to open the
          signup form popup.
        </p>
      </div>
    </div>
  );
};

export default TruckOwnerInfo;
