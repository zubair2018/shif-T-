// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Shifty Technologies .</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400">
            Terms
          </a>
          <a href="#" className="hover:text-yellow-400">
            Privacy
          </a>
          <a href="#" className="hover:text-yellow-400">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
