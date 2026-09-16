import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import './Admin.css';
import {
  FaHeart,
  FaShieldAlt,
  FaGlobeAsia,
  FaAward,
  FaUsers,
  FaLock,
  FaChartLine,
} from "react-icons/fa";

import "./About.css";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_URL,
} from "../config/contact";

function About() {
  const values = [
    {
      icon: <FaHeart />,
      title: "Passion For Travel",
      text: "We create amazing travel experiences with love and dedication.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Trust & Safety",
      text: "Your safety and comfort is our first priority.",
    },

    {
      icon: <FaGlobeAsia />,
      title: "Cultural Respect",
      text: "Experience local culture with responsible tourism.",
    },

    {
      icon: <FaAward />,
      title: "Excellence",
      text: "Premium services with attention to every detail.",
    },
  ];

  const choose = [
    {
      icon: <FaUsers />,
      title: "Customer Satisfaction",
      text: "We carefully design every journey according to customer needs.",
    },

    {
      icon: <FaLock />,
      title: "Transparency & Quality",
      text: "Reliable partners and complete transparency in every service.",
    },

    {
      icon: <FaChartLine />,
      title: "Cost Effective Tours",
      text: "Affordable packages without compromising quality.",
    },
  ];

  return (
    <div>
      {/* ================= HERO ================= */}

      <section className="about-hero">
        <div className="hero-overlay"></div>

        <div className="about-hero-content" data-aos="zoom-in">
          <h1>About AB Tour Travel</h1>

          <p>Creating unforgettable journeys across India and beyond</p>

          <Link to="/contact" className="hero-btn">
            Plan Your Journey
          </Link>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="about-intro container">
        <h2 data-aos="fade-up">Who We Are</h2>

        <p data-aos="fade-up">
          Welcome to AB Tour Travel. We are passionate about creating memorable
          travel experiences with comfort, safety and professional guidance.
        </p>

        <p data-aos="fade-up">
          From beautiful mountains of Himachal to beaches of Goa, from
          historical monuments to wildlife adventures, we design journeys that
          create lifelong memories.
        </p>
      </section>

      {/* ================= MISSION ================= */}

      <section className="mission-section container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h2>Our Mission</h2>

            <p>
              Our mission is to provide customized travel experiences that match
              every traveller's dream. Whether it is a family vacation,
              honeymoon, adventure trip or wildlife safari, we make your journey
              smooth and unforgettable.
            </p>

            <h4>What We Offer</h4>

            <p>
              Tour packages, hotel booking, transportation, guided tours and
              complete travel solutions.
            </p>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
                className="mission-image"
                alt="travel"
              ></img>
            </Tilt>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="stats-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <h2>
                <CountUp end={15} duration={3} enableScrollSpy scrollSpyOnce />+
              </h2>

              <p>Years Experience</p>
            </div>

            <div className="col-md-3 col-6">
              <h2>
                <CountUp
                  end={10000}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                  separator="," 
                />+
              </h2>

              <p>Happy Travelers</p>
            </div>

            <div className="col-md-3 col-6">
              <h2>
                <CountUp end={200} duration={3} enableScrollSpy scrollSpyOnce />+
              </h2>

              <p>Tour Packages</p>
            </div>

            <div className="col-md-3 col-6">
              <h2>
                <CountUp
                  end={4.9}
                  decimals={1}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h2>

              <p>Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}

      <section className="container values-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Our Values</h2>

          <p>The principles that guide our travel services</p>
        </div>

        <div className="row g-4">
          {values.map((item, index) => (
            <div className="col-md-3" key={index} data-aos="flip-up">
              <Tilt scale={1.05}>
                <div className="info-card">
                  <div className="info-icon">{item.icon}</div>

                  <h5>{item.title}</h5>

                  <p>{item.text}</p>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="container why-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Why Choose Us</h2>

          <p>
            We provide reliable, comfortable and memorable travel experiences.
          </p>
        </div>

        <div className="row g-4">
          {choose.map((item, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.04}>
                <div className="info-card why-card">
                  <div className="why-icon">{item.icon}</div>

                  <h5>{item.title}</h5>

                  <p>{item.text}</p>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VISION ================= */}

      <section className="vision-section">
        <div className="container" data-aos="zoom-in">
          <div className="vision-box">
            <h2>Our Vision</h2>

            <p>
              Our vision is to become one of the most trusted travel companies
              by providing innovative, affordable and high-quality travel
              solutions.
            </p>

            <p>
              We want every traveller to explore new places, experience
              different cultures and create beautiful memories without any
              stress.
            </p>
          </div>
        </div>
      </section>

      {/* ================= AWARDS ================= */}

      <section className="container awards-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Awards & Recognition</h2>

          <p>Recognized for our commitment towards excellence.</p>
        </div>

        <div className="row g-4">
          {[
            {
              title: "TripAdvisor Excellence",
              text: "Certificate of Excellence Award",
            },

            {
              title: "Best Tour Operator",
              text: "Asian Travel Awards 2024",
            },

            {
              title: "Sustainable Tourism",
              text: "Green Tourism Certification",
            },
          ].map((award, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="award-card">
                <div className="award-icon">
                  <FaAward />
                </div>

                <h5>{award.title}</h5>

                <p>{award.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="about-cta">
        <div className="cta-overlay"></div>

        <div className="container" data-aos="zoom-in">
          <div className="cta-content">
            <h2>Ready For Your Next Adventure?</h2>

            <p>Plan your dream trip with AB Tour Travel today.</p>

            <Link to="/contact" className="cta-btn">
              Book Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="about-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h3>AB Tour Travel</h3>

              <p>
                Your trusted partner for unforgettable journeys, adventures and
                experiences.
              </p>
            </div>

            <div className="col-md-4">
              <h5>Quick Links</h5>

              <Link to="/">Home</Link>

              <Link to="/tours">Tours</Link>

              <Link to="/destinations">Destinations</Link>

              <Link to="/contact">Contact</Link>
            </div>

            <div className="col-md-4">
              <h5>Contact</h5>

              <p>📍 India</p>

              <p>📞 {CONTACT_PHONE_DISPLAY}</p>

              <p>✉ {CONTACT_EMAIL}</p>
            </div>
          </div>

          <hr />

          <p className="copyright">
            © 2026 AB Tour Travel. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* ================= FLOAT BUTTONS ================= */}

      <a href={WHATSAPP_URL} className="whatsapp-btn" target="_blank" rel="noreferrer">
        💬
      </a>

      <button
        className="top-btn"
        onClick={() =>
          window.scrollTo({
            top: 0,

            behavior: "smooth",
          })
        }
      >
        ↑
      </button>
    </div>
  );
}

export default About;
