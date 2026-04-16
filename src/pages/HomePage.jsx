import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Hero from "../components/Pages/HomePage/Hero";
import Footer from "../components/Layouts/Footer";
import AboutHero from "../components/Pages/HomePage/AboutHero";
import FeaturedProjects from "../components/Pages/HomePage/FeaturedProjects";
import DesignProcess from "../components/Pages/HomePage/DesignProcess";
import ToolsSection from "../components/Pages/HomePage/ToolsSection";
import SkillTag from "../components/Pages/HomePage/SkillTag";

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
