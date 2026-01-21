import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Services from "./components/Services.jsx";
import WhyShifty from "./components/WhyShifty.jsx";
import TruckOwners from "./components/TruckOwners.jsx";
import AppDownload from "./components/AppDownload.jsx";
import Footer from "./components/Footer.jsx";
import BookingModal from "./components/BookingModal.jsx";
import PartnerModal from "./components/PartnerModal.jsx";
import AdminPage from "./AdminPage.jsx";
import TruckOwnerForm from "./TruckOwnerInfo.jsx";

const HomePage = ({ onBookClick, onPartnerClick }) => (
  <>
    <Navbar />
    <Hero onBookClick={onBookClick} />
    <HowItWorks />
    <Services />
    <WhyShifty />
    <TruckOwners onPartnerClick={onPartnerClick} />
    <AppDownload />
    <Footer />
  </>
);

const App = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const path = window.location.pathname;

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);
  const openPartner = () => setIsPartnerOpen(true);
  const closePartner = () => setIsPartnerOpen(false);

  let Page = null;

  if (path === "/admin") {
    Page = () => <AdminPage />;
  } else if (path === "/owners") {
    Page = () => <TruckOwnerForm />;
  } else {
    Page = () => (
      <HomePage 
        onBookClick={openBooking}
        onPartnerClick={openPartner}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Page />
      
      {path === "/" && isBookingOpen && (
        <BookingModal onClose={closeBooking} />
      )}
      
      {path === "/" && isPartnerOpen && (
        <PartnerModal onClose={closePartner} />
      )}
    </div>
  );
};

export default App;
