// src/components/BottomNav.jsx
const BottomNav = ({ onBookClick, onScrollTo }) => {
  const items = [
    { icon: "🏠", label: "Home", action: () => onScrollTo("#top") },
    { icon: "🚚", label: "Services", action: () => onScrollTo("#services") },
    { icon: "📦", label: "Book", action: onBookClick, highlight: true },
    { icon: "ℹ️", label: "About", action: () => onScrollTo("#about") },
    { icon: "📞", label: "Contact", action: () => onScrollTo("#contact") },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-md">
      <div className="flex items-center justify-around h-16 px-2">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.action}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all ${
              item.highlight
                ? "bg-yellow-400/10 border border-yellow-400/20"
                : "hover:bg-slate-800/50"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className={`text-[10px] font-medium ${item.highlight ? "text-yellow-300" : "text-slate-400"}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;