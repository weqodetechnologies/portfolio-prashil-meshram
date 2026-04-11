import React from "react";
import Navbar from "../componunts/Layouts/Navbar";
import Footer from "../componunts/Layouts/Footer";
import Hero from "../componunts/Pages/About/Hero";
import ExperienceEducation from "../componunts/Pages/About/ExperienceEducation";
import Music from "../componunts/Pages/About/Music";
import FevBooks from "../componunts/Pages/About/FevBooks";
import BentoGallery from "../componunts/Pages/About/BentoGallery";


function AboutUs() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExperienceEducation />
      <Music />
      <FevBooks />
      <BentoGallery />
      <Footer />
    </div>
  );
}

export default AboutUs;
