// src/components/BottomNav.jsx
const BottomNav = ({ onBookClick, onScrollTo }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 h-14 border-t border-slate-800 bg-slate-950/95 backdrop-blur flex items-center justify-around text-[11px] text-slate-300">
      <button
        className="flex flex-col items-center gap-0.5"
        onClick={() => onScrollTo("#top")}
      >
        <span className="text-lg">🏠</span>
        <span>Home</span>
      </button>
      <button
        className="flex flex-col items-center gap-0.5"
        onClick={() => onScrollTo("#services")}
      >
        <span className="text-lg">🚚</span>
        <span>Services</span>
      </button>
      <button
        className="flex flex-col items-center gap-0.5"
        onClick={onBookClick}
      >
        <span className="text-lg">📦</span>
        <span>Book</span>
      </button>
      <button
        className="flex flex-col items-center gap-0.5"
        onClick={() => onScrollTo("#about")}
      >
        <span className="text-lg">ℹ️</span>
        <span>About</span>
      </button>
      <button
        className="flex flex-col items-center gap-0.5"
        onClick={() => onScrollTo("#contact")}
      >
        <span className="text-lg">📞</span>
        <span>Contact</span>
      </button>
    </nav>
  );
};

export default BottomNav;
