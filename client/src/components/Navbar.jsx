// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = ({ onBookClick, onPartnerClick }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 py-2.5 flex items-center justify-between">
        {/* Logo + brand */}
        <button
          type="button"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-xl bg-yellow-400 flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.6)]">
            <div className="relative h-5 w-5">
              <div className="absolute inset-0 rounded-full bg-slate-950" />
              <div className="absolute inset-1 rounded-full border-2 border-slate-700 border-dashed" />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-semibold text-base leading-tight">
              Shifty
            </span>
            <span className="text-[10px] uppercase tracking-wide text-slate-400">
              Mini trucks · big moves
            </span>
          </div>
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-5 text-sm text-slate-200">
          <button
            onClick={(e) => handleNavClick(e, "#how")}
            className="hover:text-yellow-400 transition-colors"
          >
            How it works
          </button>
          <button
            onClick={(e) => handleNavClick(e, "#services")}
            className="hover:text-yellow-400 transition-colors"
          >
            Services
          </button>
          <button
            onClick={(e) => handleNavClick(e, "#owners")}
            className="hover:text-yellow-400 transition-colors"
          >
            For truck owners
          </button>
          <button
            onClick={(e) => handleNavClick(e, "#download")}
            className="hover:text-yellow-400 transition-colors"
          >
            Download app
          </button>
        </nav>

        {/* Right side: primary actions + hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-yellow-400 text-slate-950 hover:bg-yellow-300 transition-colors shadow-[0_0_20px_rgba(250,204,21,0.6)]"
          >
            Book a truck
          </button>

          <button
            onClick={(e) => handleNavClick(e, "#download")}
            className="hidden lg:inline-flex px-3 py-1.5 text-xs font-medium rounded-full border border-slate-600 text-slate-200 hover:border-yellow-300 hover:text-yellow-300 transition-colors"
          >
            Download app
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-4 rounded-full bg-slate-200 transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-slate-200 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-slate-200 transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm text-slate-200">
            <button
              onClick={(e) => handleNavClick(e, "#how")}
              className="py-1 text-left hover:text-yellow-400"
            >
              How it works
            </button>
            <button
              onClick={(e) => handleNavClick(e, "#services")}
              className="py-1 text-left hover:text-yellow-400"
            >
              Services
            </button>
            <button
              onClick={(e) => handleNavClick(e, "#owners")}
              className="py-1 text-left hover:text-yellow-400"
            >
              For truck owners
            </button>
            <button
              onClick={onPartnerClick}
              className="py-1 text-left hover:text-yellow-400"
            >
              Become a partner
            </button>
            <button
              onClick={(e) => handleNavClick(e, "#download")}
              className="py-1 text-left hover:text-yellow-400"
            >
              Download app
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
