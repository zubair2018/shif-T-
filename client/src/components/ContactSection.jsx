// src/components/ContactSection.jsx
const ContactSection = () => {
  const contacts = [
    {
      icon: "💬",
      label: "WhatsApp",
      value: "+91-8082533183",
      sub: "Fastest response",
      color: "from-emerald-500/10 to-transparent border-emerald-500/20",
    },
    {
      icon: "📧",
      label: "Email",
      value: "shiftytechnologies@gmail.com",
      sub: "For formal queries",
      color: "from-blue-500/10 to-transparent border-blue-500/20",
    },
  ];

  return (
    <section id="contact" className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header — left aligned */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 mb-4">
            <span className="text-[11px] text-blue-300 font-medium tracking-widest uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get in touch{" "}
            <span className="text-yellow-400">anytime</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            Reach us on WhatsApp or email for bookings, partnership queries, or
            any help you need. We respond fast.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {contacts.map((c) => (
            <div
              key={c.label}
              className={`rounded-2xl bg-gradient-to-b ${c.color} border p-6 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="text-xs text-slate-400 mb-1">{c.label}</div>
              <div className="text-white font-semibold text-sm mb-1">{c.value}</div>
              <div className="text-[11px] text-slate-500">{c.sub}</div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-slate-600 mt-8 max-w-md">
          Soon you'll be able to manage everything inside the ShifT app. For
          now, this is our direct line.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;