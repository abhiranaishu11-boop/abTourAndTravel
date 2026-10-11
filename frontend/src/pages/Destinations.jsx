import React, { useEffect } from "react";
import "./Destinations.css";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaMountain,
  FaUmbrellaBeach,
  FaTree,
  FaLandmark,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdCardTravel,
  MdAttachMoney,
  MdSecurity,
  MdPublic,
  MdLightbulbOutline,
} from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "../config/contact";


const Destinations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const destinationsData = [
    {
      id: 1,
      country: "India",
      subtitle: "Discover Incredible India",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",

      description:
        "India is a diverse country and has everything to it including snow-white mountains to golden deserts and beautiful beaches. Our personalized tours are available in all the major attractions places like Himachal Pradesh, Uttarakhand, Rajasthan, Goa and Kerala. Go sightseeing in hill stations, adventure games, heritage sites, or have fun in nature. You might be planning a family holiday, honeymoon or you may be on your own, we will design you a personalized package to suit you.",

      highlights: [
        "Himachal Pradesh & Uttarakhand",
        "Rajasthan Heritage Sites",
        "Kerala Nature & Beaches",
        "Goa Beaches",
        "Hill Stations & Adventure",
      ],

      duration: "7-21 days",
      bestTime: "October - March",
      reverse: false,
    },

    {
      id: 2,
      country: "Nepal",
      subtitle: "Adventure in the Himalayas",

      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",

      description:
        "Visit Kathmandu, Pokhara and Everest region. Experience breathtaking mountain landscapes, ancient temples and thrilling adventure sports.",

      highlights: [
        "Kathmandu",
        "Pokhara",
        "Everest View",
        "Adventure",
        "Temples",
        "Culture",
      ],

      duration: "5 - 14 Days",
      bestTime: "Mar - May",

      reverse: true,
    },

    {
      id: 3,
      country: "Bhutan",

      subtitle: "The Land of Happiness",

      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",

      description:
        "Experience peaceful monasteries, snow covered mountains and traditional Bhutanese culture. Perfect destination for nature lovers.",

      highlights: [
        "Tiger Nest",
        "Paro",
        "Thimphu",
        "Monasteries",
        "Nature",
        "Peace",
      ],

      duration: "6 - 10 Days",

      bestTime: "Sep - Nov",

      reverse: false,
    },

    {
      id: 4,

      country: "Sri Lanka",

      subtitle: "Island Paradise",

      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",

      description:
        "Relax on tropical beaches, enjoy wildlife safaris, tea plantations and UNESCO heritage sites across beautiful Sri Lanka.",

      highlights: [
        "Beaches",
        "Safari",
        "Tea Gardens",
        "Temples",
        "Colombo",
        "Scenic Train",
      ],

      duration: "7 - 14 Days",

      bestTime: "Dec - Mar",

      reverse: true,
    },
  ];

  const features = [
    {
      icon: <MdLocationOn />,
      title: "Tailor Made Trips",
      desc: "Customized itineraries according to your budget and interests.",
    },

    {
      icon: <MdCardTravel />,
      title: "Complete Travel Services",
      desc: "Hotels, transport, sightseeing and guides included.",
    },

    {
      icon: <MdAttachMoney />,
      title: "Affordable Pricing",
      desc: "Premium experience with competitive prices.",
    },

    {
      icon: <MdSecurity />,
      title: "Safe & Secure",
      desc: "Verified hotels and trusted travel partners.",
    },

    {
      icon: <MdPublic />,
      title: "International Tours",
      desc: "India, Nepal, Bhutan & Sri Lanka packages.",
    },

    {
      icon: <MdLightbulbOutline />,
      title: "Travel Experts",
      desc: "Professional support before and during your trip.",
    },
  ];

  return (
    <div className="destinations-page">

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="container">

          <h1 data-aos="zoom-in">
            Explore Amazing Destinations
          </h1>

          <p data-aos="fade-up" data-aos-delay="200">
            Discover unforgettable journeys across India, Nepal,
            Bhutan and Sri Lanka with AB Tour Travel.
          </p>

          <Link
            to="/contact"
            className="btn-primary mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Plan Your Trip
          </Link>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="intro-section">

        <div className="container">

          <h2 data-aos="fade-up">
            Find Your Next Adventure
          </h2>

          <p data-aos="fade-up" data-aos-delay="150">
            Whether you want snow covered mountains, tropical beaches,
            spiritual destinations or historical heritage,
            we have carefully designed travel packages
            for every kind of traveller.
          </p>

        </div>

      </section>
      {/* ================= DESTINATIONS ================= */}
<section className="destinations-list">
  <div className="container">

    {destinationsData.map((dest) => (

      <div
        className={`destination-card ${dest.reverse ? "reverse" : ""}`}
        key={dest.id}
        id={`destination-${dest.id}`}
        data-aos={dest.reverse ? "fade-left" : "fade-right"}
      >

        <div className="card-image">
          <img src={dest.image} alt={`${dest.country} travel destination`} loading="lazy" decoding="async" />

          <span className="image-badge">
            <FaMapMarkerAlt /> {dest.country}
          </span>
        </div>

        <div className="card-content">
          <h2>{dest.country}</h2>

          <a className="subtitle-link" href={`#destination-${dest.id}`}>
            {dest.subtitle} <FaArrowRight />
          </a>

          <p className="description">{dest.description}</p>

          <div className="meta-info">
            <span>
              <FaClock /> {dest.duration}
            </span>

            <span>
              <FaClock /> Best: {dest.bestTime}
            </span>
          </div>

          <div className="destination-details">
            <h4>Key Highlights:</h4>
            <ul className="highlights-grid">
              {dest.highlights.map((highlight) => (
                <li key={highlight}>
                  <FaMapMarkerAlt className="icon-small" /> {highlight}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary">
              {dest.country === "India" ? "View Tours to India" : "Plan this trip"} <FaArrowRight />
            </Link>
          </div>

        </div>

      </div>

    ))}

  </div>
</section>
            {/* Why Travel With Us */}
      <section className="features-section">
        <div className="container">

          <div
            className="section-heading"
            data-aos="fade-up"
          >
            <span className="section-tag">
              WHY CHOOSE US
            </span>

            <h2>Travel Better With AB Tour Travel</h2>

            <p>
              We provide memorable journeys with comfort,
              safety and complete travel assistance.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                className="feature-item"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}

      <section
        className="cta-section"
        data-aos="zoom-in"
      >
        <div className="container">
          <h2>Book Your International and Domestic Travel</h2>
          <p>
            AB Tour Travel enables tourists to visit some of the best
            destinations such as India, Nepal, Bhutan, and Sri Lanka and travel
            with full confidence. Whether you want to have adventure, relax, or
            explore the culture, we have a travel solution that will suit you.
          </p>
          <Link to="/contact" className="btn-primary">
            Reserve Your Trip Today
          </Link>
        </div>
      </section>

      {/* Footer */}

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-col brand-col">
            <h4>AB Tour Travel</h4>

            <p>
              Your trusted partner for unforgettable
              journeys across India, Nepal, Bhutan
              and Sri Lanka.
            </p>

            <div className="social-icons">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>

            <ul>
              <li>Home</li>
              <li>Destinations</li>
              <li>Tours</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Destinations</h4>

            <ul>
              <li>India Tours</li>
              <li>Nepal Adventures</li>
              <li>Bhutan Experiences</li>
              <li>Sri Lanka Getaways</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>

            <ul>
              <li>
                <MdLocationOn />
                &nbsp; New Delhi, India
              </li>

              <li>
                <FaPhoneAlt />
                &nbsp; {CONTACT_PHONE_DISPLAY}
              </li>

              <li>
                <FaEnvelope />
                &nbsp; {CONTACT_EMAIL}
              </li>
            </ul>
          </div>

        </div>

        
      </footer>

    </div>
  );
};

export default Destinations;