import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Hero from "../components/Pages/About/Hero";
import ExperienceEducation from "../components/Pages/About/ExperienceEducation";
import Music from "../components/Pages/About/Music";
import FevBooks from "../components/Pages/About/FevBooks";
import BentoGallery from "../components/Pages/About/BentoGallery";


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
