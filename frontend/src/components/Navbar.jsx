import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/logo.png";

function Navbar({ dark }) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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

  const navigateFromMobileMenu = (event, path) => {
    event.preventDefault();
    const menu = document.getElementById("mobileMenu");
    const Offcanvas = window.bootstrap?.Offcanvas;
    const bs = menu && Offcanvas ? Offcanvas.getOrCreateInstance(menu) : null;

    if (bs && menu.classList.contains("show")) {
      menu.addEventListener("hidden.bs.offcanvas", () => navigate(path), { once: true });
      bs.hide();
      return;
    }

    navigate(path);
  };

  const openMobileMenu = () => {
    const menu = document.getElementById("mobileMenu");
    const Offcanvas = window.bootstrap?.Offcanvas;

    if (menu && Offcanvas) {
      Offcanvas.getOrCreateInstance(menu).show();
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
            type="button"
            aria-label="Open navigation menu"
            aria-controls="mobileMenu"
            onClick={openMobileMenu}
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
              onClick={(event) => navigateFromMobileMenu(event, path)}
              className="mobile-link"
              end={name === "Home"}
            >
              {name}
            </NavLink>
          ))}

          <Link to="/contact" className="booking-btn mobile-book">
            Book Your Trip
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
