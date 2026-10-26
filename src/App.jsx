import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Earthing from "./pages/Earthing";

import Lightning from "./pages/Lightning";
import WaterDrilling from "./pages/WaterDrilling";
import Electric from "./pages/Electric";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      {/* PAGE CONTENT */}
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route
  path="/products/earthing-grounding-solutions"
  element={<Earthing />}
/>
          <Route path="/products/electrical-home-utility-products" element={<Electric />} />
          <Route path="/products/lightning-electrical-safety-solutions" element={<Lightning />} />
          <Route path="/products/water-drilling-solutions" element={<WaterDrilling />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
