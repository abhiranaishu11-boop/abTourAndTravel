import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Destinations from "./pages/Destinations";
import Tours from "./pages/Tours";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  useEffect(() => {
    // Theme logic
    if (dark) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    
    // AOS (Animate On Scroll) Setup
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 50,    
    });
  }, [dark]);

  return (
    <BrowserRouter>
      <Navbar toggleTheme={toggleTheme} dark={dark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
      <Footer />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;