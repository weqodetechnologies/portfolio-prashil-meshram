import React from "react";
import Navbar from "../componunts/Layouts/Navbar";
import Footer from "../componunts/Layouts/Footer";
import Hero from "../componunts/Pages/Appaleon/Hero";
import UserPersona from "../componunts/Pages/Appaleon/UserPersona";
import ColorTypographySection from "../componunts/Pages/Appaleon/ColorTypographySection";
import IconographyComponents from "../componunts/Pages/Appaleon/IconographyComponents";


function Appaleon() {
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

export default Appaleon;