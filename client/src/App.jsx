// src/App.jsx
import { useState } from "react";
import AppHeader from "./components/AppHeader";
import BottomNav from "./components/BottomNav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import WhyShifty from "./components/WhyShifty";
import TruckOwners from "./components/TruckOwners";
import AppDownload from "./components/AppDownload";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import PartnerModal from "./components/PartnerModal";
import AdminPage from "./AdminPage";
import DriverPage from "./DriverPage";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const path = window.location.pathname;

  if (path === "/admin") return <AdminPage />;
  if (path === "/driver") return <DriverPage />;

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex flex-col min-h-screen">

        <AppHeader
  onPartnerClick={() => setIsPartnerOpen(true)}
  onBookClick={() => setIsBookingOpen(true)}
  onScrollTo={scrollTo}
        />


        <main className="flex-1 overflow-y-auto pb-16">

          <Hero onBookClick={() => setIsBookingOpen(true)} />
          <HowItWorks />
          <Services />
          <WhyShifty />
          <TruckOwners onPartnerClick={() => setIsPartnerOpen(true)} />
          <AppDownload />
          <AboutSection />
          <ContactSection />
          <Footer />
        </main>

        <BottomNav
          onBookClick={() => setIsBookingOpen(true)}
          onPartnerClick={() => setIsPartnerOpen(true)}
          onScrollTo={scrollTo}
        />

        {isBookingOpen && (
          <BookingModal onClose={() => setIsBookingOpen(false)} />
        )}
        {isPartnerOpen && (
          <PartnerModal onClose={() => setIsPartnerOpen(false)} />
        )}
      </div>
    </div>
  );
}

export default App;
