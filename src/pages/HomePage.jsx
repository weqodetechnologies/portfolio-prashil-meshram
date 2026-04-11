import React from "react";
import Navbar from "../componunts/Layouts/Navbar";
import Hero from "../componunts/Pages/HomePage/Hero";
import Footer from "../componunts/Layouts/Footer";
import AboutHero from "../componunts/Pages/HomePage/AboutHero";
import FeaturedProjects from "../componunts/Pages/HomePage/FeaturedProjects";
import DesignProcess from "../componunts/Pages/HomePage/DesignProcess";
import ToolsSection from "../componunts/Pages/HomePage/ToolsSection";
import SkillTag from "../componunts/Pages/HomePage/SkillTag";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutHero />
      <FeaturedProjects />
      <DesignProcess/>
      <ToolsSection/>
      <SkillTag/>
      <Footer />
    </div>
  );
}

export default HomePage;
