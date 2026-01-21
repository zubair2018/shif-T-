// src/components/TruckOwners.jsx
const TruckOwners = ({ onPartnerClick }) => (
  <section
    id="owners" // navbar scroll target
    className="bg-slate-950 py-12 border-t border-slate-800"
  >
    <div className="max-w-6xl mx-auto px-4">
      <div className="max-w-md space-y-3">
        <h2 className="text-xl font-semibold">For truck owners & fleets</h2>
        <p className="text-sm text-slate-300">
          Attach any truck from mini to 12-tyre. Submit details and we'll
          contact you back for verification and trips.
        </p>
        <button
          onClick={onPartnerClick}
          className="px-6 py-2 bg-slate-100 text-slate-950 rounded-full text-xs font-semibold hover:bg-white"
        >
          Become a Shifty partner
        </button>
      </div>
    </div>
  </section>
);

export default TruckOwners;
