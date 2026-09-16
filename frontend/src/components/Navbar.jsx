import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/logo.png";

function Navbar({ toggleTheme, dark }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const closeMenu = () => {
    const menu = document.getElementById("mobileMenu");

    const bs = window.bootstrap?.Offcanvas.getInstance(menu);

    if (bs) {
      bs.hide();
    }
  };

  return (
    <>
      <nav
  className={`premium-navbar 
${scrolled ? "scrolled" : ""}
${dark ? "dark-mode" : ""}`}
>
        <div className="container">
          {/* LOGO */}

          <Link to="/" className="navbar-brand">
            <img src={logo} alt="AB Tour Travel" />
          </Link>

          {/* DESKTOP MENU */}

          <div className="desktop-menu">
            {[
              ["Home", "/"],
              ["Destinations", "/destinations"],
              ["Tours", "/tours"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Admin", "/admin"],
            ].map(([name, path]) => (
              <NavLink
                key={name}
                to={path}
                className="nav-item-link"
                end={name === "Home"}
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT */}

          <div className="nav-actions">
            {/* <button className="theme-btn" onClick={toggleTheme}>
              {dark ? "☀️" : "🌙"}
            </button> */}

            <Link to="/contact" className="booking-btn">
              Book Now
            </Link>
          </div>

          {/* MOBILE BUTTON */}

          <button
            className="mobile-toggle"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}

      <div
        className={`offcanvas offcanvas-end mobile-menu 
${dark ? "dark-mobile" : ""}`}
        id="mobileMenu"
      >
        <div className="offcanvas-header">
          <img src={logo} className="mobile-logo" />

          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          {[
            ["Home", "/"],
            ["Destinations", "/destinations"],
            ["Tours", "/tours"],
            ["About", "/about"],
            ["Contact", "/contact"],
            ["Admin", "/admin"],
          ].map(([name, path]) => (
            <NavLink
              key={name}
              to={path}
              onClick={closeMenu}
              className="mobile-link"
              end={name === "Home"}
            >
              {name}
            </NavLink>
          ))}

          <Link to="/contact" className="booking-btn mobile-book">
            Book Your Trip
          </Link>

          <button className="theme-btn mobile-theme" onClick={toggleTheme}>
            Change Theme {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
