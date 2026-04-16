import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Hero from "../components/Pages/Appaleon/Hero";
import UserPersona from "../components/Pages/Appaleon/UserPersona";
import ColorTypographySection from "../components/Pages/Appaleon/ColorTypographySection";
import IconographyComponents from "../components/Pages/Appaleon/IconographyComponents";


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