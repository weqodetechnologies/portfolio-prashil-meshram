import React from "react";
import Navbar from "../componunts/Layouts/Navbar";
import Footer from "../componunts/Layouts/Footer";
import Hero from "../componunts/Pages/AbhidnyaPage/Hero";
import UserPersona from "../componunts/Pages/AbhidnyaPage/UserPersona";
import ColorTypographySection from "../componunts/Pages/AbhidnyaPage/ColorTypographySection";
import IconographyComponents from "../componunts/Pages/AbhidnyaPage/IconographyComponents";



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