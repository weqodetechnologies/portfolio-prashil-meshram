import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Hero from "../components/Pages/AbhidnyaPage/Hero";
import UserPersona from "../components/Pages/AbhidnyaPage/UserPersona";
import ColorTypographySection from "../components/Pages/AbhidnyaPage/ColorTypographySection";
import IconographyComponents from "../components/Pages/AbhidnyaPage/IconographyComponents";



function AbhidnyaPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <UserPersona />
      <ColorTypographySection />
      <IconographyComponents />
      <Footer />
    </div>
  );
}

export default AbhidnyaPage;