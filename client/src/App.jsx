// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import WhyShifty from "./components/WhyShifty";
import TruckOwners from "./components/TruckOwners";
import AppDownload from "./components/AppDownload";
import BookingModal from "./components/BookingModal";
import PartnerModal from "./components/PartnerModal";
import AdminPage from "./AdminPage";
import TruckOwnerInfo from "./TruckOwnerInfo";
import DriverPage from "./DriverPage";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const path = window.location.pathname;

  if (path === "/admin") return <AdminPage />;
  if (path === "/owners") return <TruckOwnerInfo />;
  if (path === "/driver") return <DriverPage />;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar
        onBookClick={() => setIsBookingOpen(true)}
        onPartnerClick={() => setIsPartnerOpen(true)}
      />

      {/* Add padding-top to clear fixed navbar */}
      <main className="pt-16 pb-8">
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <HowItWorks />
        <Services />
        <WhyShifty />
        <TruckOwners onPartnerClick={() => setIsPartnerOpen(true)} />
        <AppDownload />
      </main>

      {isBookingOpen && (
        <BookingModal onClose={() => setIsBookingOpen(false)} />
      )}
      {isPartnerOpen && (
        <PartnerModal onClose={() => setIsPartnerOpen(false)} />
      )}
    </div>
  );
}

export default App;
