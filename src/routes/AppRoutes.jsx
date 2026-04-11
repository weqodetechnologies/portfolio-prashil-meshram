import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Work from "../pages/Work";
import Appaleon from "../pages/Appaleon";
import AbhidnyaPage from "../pages/AbhidnyaPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/work" element={<Work />} />
      <Route path="/Appaleon" element={<Appaleon />} />
      <Route path="/AbhidnyaPage" element={<AbhidnyaPage />} />
    </Routes>
  );
};

export default AppRoutes;
