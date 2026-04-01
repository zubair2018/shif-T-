// src/components/AppHeader.jsx
import { useState } from "react";

const AppHeader = ({ onPartnerClick, onBookClick, onScrollTo }) => {
  const [open, setOpen] = useState(false);

  const handleAndClose = (fn) => {
    fn();
    setOpen(false);
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-yellow-400 flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.5)]">
          <span className="text-slate-950 font-black text-sm">S</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-white tracking-tight">ShifT</span>
          <span className="text-[10px] text-slate-400">Trusted trucks on tap</span>
        </div>
      </div>

      {/* Desktop nav */}
      <div className="hidden sm:flex items-center gap-1 text-[12px] text-slate-300">
        {[
          { label: "Services", id: "#services" },
          { label: "How it works", id: "#how" },
          { label: "About", id: "#about" },
          { label: "Contact", id: "#contact" },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => onScrollTo(item.id)}
            className="px-3 py-1.5 rounded-lg hover:text-yellow-300 hover:bg-yellow-400/5 transition-all"
          >
            {item.label}
          </button>
        ))}
        <div className="w-px h-4 bg-slate-700 mx-2" />
        <button
          onClick={onBookClick}
          className="px-4 py-1.5 rounded-full bg-yellow-400 text-slate-950 text-[12px] font-bold hover:bg-yellow-300 transition-all shadow-[0_0_15px_rgba(250,204,21,0.3)]"
        >
          Book Now
        </button>
        <button
          onClick={onPartnerClick}
          className="px-4 py-1.5 rounded-full border border-slate-700 text-[12px] text-slate-200 hover:border-yellow-400/50 hover:text-yellow-300 transition-all ml-1"
        >
          Partner
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="sm:hidden p-2 rounded-lg border border-slate-700 text-slate-200 hover:border-slate-500 transition-all"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden absolute left-0 right-0 top-16 bg-slate-950/98 backdrop-blur-md border-b border-slate-800 z-40">
          <div className="flex flex-col px-6 py-4 gap-1">
            {[
              { label: "Services", fn: () => onScrollTo("#services") },
              { label: "How it works", fn: () => onScrollTo("#how") },
              { label: "About", fn: () => onScrollTo("#about") },
              { label: "Contact", fn: () => onScrollTo("#contact") },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleAndClose(item.fn)}
                className="text-left py-2.5 text-sm text-slate-300 hover:text-yellow-300 border-b border-slate-800/50 last:border-0 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleAndClose(onBookClick)}
                className="flex-1 py-2.5 rounded-full bg-yellow-400 text-slate-950 text-sm font-bold"
              >
                Book Now
              </button>
              <button
                onClick={() => handleAndClose(onPartnerClick)}
                className="flex-1 py-2.5 rounded-full border border-slate-700 text-slate-200 text-sm"
              >
                Partner
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default AppHeader;