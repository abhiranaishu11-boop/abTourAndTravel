import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

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

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // AOS (Animate On Scroll) Setup
    AOS.init({
      duration: 450,
      once: true,
      offset: 20,
      disable: reduceMotion,
    });
  }, [dark]);

  return (
    <BrowserRouter>
      <ScrollToTop />
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
    </BrowserRouter>
  );
}

export default App;