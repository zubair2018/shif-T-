// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = () => {
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
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-yellow-400 flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.6)]">
            <div className="relative h-5 w-5">
              <div className="absolute inset-0 rounded-full bg-slate-950" />
              <div className="absolute inset-1 rounded-full border-2 border-slate-700 border-dashed" />
            </div>
          </div>
          <span className="font-semibold text-lg tracking-tight">Shifty</span>
        </div>

        {/* desktop links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a
            href="#how"
            onClick={(e) => handleNavClick(e, "#how")}
            className="hover:text-yellow-400 transition-colors"
          >
            How it works
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "#services")}
            className="hover:text-yellow-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#owners"
            onClick={(e) => handleNavClick(e, "#owners")}
            className="hover:text-yellow-400 transition-colors"
          >
            For truck owners
          </a>
          <a
            href="#download"
            onClick={(e) => handleNavClick(e, "#download")}
            className="hover:text-yellow-400 transition-colors"
          >
            Download app
          </a>
        </nav>

        {/* right: Download app only */}
        <div className="flex items-center gap-3">
          <a
            href="#download"
            onClick={(e) => handleNavClick(e, "#download")}
            className="hidden sm:inline-flex px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-yellow-400 text-slate-950 hover:bg-yellow-300 transition-colors shadow-[0_0_24px_rgba(250,204,21,0.5)]"
          >
            Download app
          </a>

          {/* hamburger */}
          <button
            className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-200"
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

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm text-slate-200">
            <a
              href="#how"
              className="py-1 hover:text-yellow-400"
              onClick={(e) => handleNavClick(e, "#how")}
            >
              How it works
            </a>
            <a
              href="#services"
              className="py-1 hover:text-yellow-400"
              onClick={(e) => handleNavClick(e, "#services")}
            >
              Services
            </a>
            <a
              href="#owners"
              className="py-1 hover:text-yellow-400"
              onClick={(e) => handleNavClick(e, "#owners")}
            >
              For truck owners
            </a>
            <a
              href="#download"
              className="py-1 hover:text-yellow-400"
              onClick={(e) => handleNavClick(e, "#download")}
            >
              Download app
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
