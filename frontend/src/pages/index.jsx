import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import "./Home.css";
import { WHATSAPP_URL } from "../config/contact";
import adventureImage from "../assets/ADVENTURE IMAGE.avif";
import heroSectionImage from "../assets/HEROSEC3.avif";
import heroImageOne from "../assets/herosecimage.jpg";

const heroImages = [
  {
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    title: "Explore The World With Us",
    desc: "Discover amazing destinations, luxury stays and unforgettable experiences.",
  },
  {
    image: adventureImage,
    title: "Adventure Beyond Limits",
    desc: "Mountains, beaches and beautiful places waiting for your journey.",
  },
  {
    image: heroSectionImage,
    title: "Create Beautiful Memories",
    desc: "Travel with comfort, safety and professional guidance.",
  },
  {
    image: heroImageOne,
    title: "Your Dream Vacation Starts Here",
    desc: "Premium tour packages specially designed for you.",
  },
];

const services = [
  {
    icon: "✈️",
    title: "Taxi and Local Transport Services",
    text: "We offer good taxi services to local transportation, sightseeing and out station services. Our qualified drivers and good-conditioned vehicles make the trip safe and comfortable.",
  },
  {
    icon: "🏨",
    title: "Hotel Booking Services",
    text: "We assist you in locating the most appropriate accommodation depending on the budget and preferences. We make sure that our hotel booking service ensures comfort, convenience, and value for money.",
  },
  {
    icon: "🧳",
    title: "Customized Tour Packages",
    text: "Each tourist is special and so are our tour packages. We design tailor-made travel packages depending on what you want to see, be it nature, adventure, family tours or honeymoon packages.",
  },
  {
    icon: "✈️",
    title: "Flight Booking Services",
    text: "We assist you to get the best offers on local and international flights, saving you time and money. We make the booking process smooth with adequate guidance and assistance.",
  },
  {
    icon: "🏔️",
    title: "Tour of Tirthan Valley Wildlife Sanctuary",
    text: "Indulge in the beauty of nature under our special Tirthan Valley tour, located close to the Great Himalayan National Park. Enjoy scenic views, camping, trekking and wildlife experiences.",
  },
  {
    icon: "📸",
    title: "Sightseeing & Travel Planning",
    text: "Our tours are well-planned sightseeing programs including key tourist sites. We are the locals and will show you the best places to see without leaving out the highlights.",
  },
];

const destinations = [
  {
    name: "Manali",
    img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Goa",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Shimla",
    img: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Taj Mahal",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nepal",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bhutan",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* ================= HERO ================= */}

      <section
        className="premium-hero"
        style={{
          backgroundImage: `url(${heroImages[current].image})`,
        }}
      >
        <div className="hero-dark"></div>

        <div className="hero-content" key={heroImages[current].title}>
          <div className="hero-box">
            <h1 data-aos="zoom-in">{heroImages[current].title}</h1>

            <p data-aos="fade-up">{heroImages[current].desc}</p>

            <div className="hero-buttons">
              <Link to="/tours" className="btn premium-btn">
                Explore Tours
              </Link>

              <Link to="/contact" className="btn glass-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="slider-dots">
          {heroImages.map((item, index) => (
            <span
              key={index}
              className={current === index ? "active-dot" : ""}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-section">
        <div className="container">
          <div className="services-intro">
            <h1>Tour and Travel Services - Full Tourism Solutions</h1>
            <p>
              Hello and welcome to AB Tour Travel, your reliable, affordable, and comfortable tourism service provider. Whether you are planning a relaxing holiday, a family vacation, or an adventure trip, we offer complete travel solutions.
            </p>
            <p>
              We provide professional service and personalized planning to deliver safe, convenient, and memorable travel experiences for every customer.
            </p>
          </div>

          <div className="services-heading">
            <h2>All-in-One Travel Services</h2>
            <p>We at AB Tour Travel provide a great variety of tourism services that would facilitate your travel and make it hassle-free.</p>
          </div>

          <div className="row g-4 service-grid">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01} transitionSpeed={200}>
                  <div className="premium-card">
                    <div className="service-circle">{service.icon}</div>

                    <h3>{service.title}</h3>

                    <p>{service.text}</p>

                    <button>Learn More</button>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}

      <section className="destination-section">
        <div className="container">
          <h2 className="main-heading">Popular Destinations</h2>

          <div className="row g-4">
            {destinations.map((place, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="destination-box">
                  <img src={place.img} alt={place.name} loading="lazy" decoding="async" />

                  <div className="destination-info">
                    <h3>{place.name}</h3>

                    <Link to="/destinations">Explore →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}

      <section className="review-section">
        <div className="container">
          <h2 className="main-heading">What Our Customers Say</h2>

          <p className="sub-heading">
            Hear from our satisfied travelers about their experiences with AB Tour Travel
          </p>

          <div className="review-grid">
            {[
              {
                name: "Emma Thompson",
                country: "United Kingdom",
                tour: "Golden Triangle Classic",
                text: "Our trip to India was absolutely magical! The attention to detail and personalized service from AB Tour Travel made it an unforgettable experience. Our guide was knowledgeable and the accommodations were perfect.",
              },

              {
                name: "Hans Mueller",
                country: "Germany",
                tour: "Everest Base Camp Trek",
                text: "The Everest Base Camp trek exceeded all expectations. The organization was flawless, and our guide made us feel safe throughout the journey. I highly recommend AB Tour Travel for anyone planning a Nepal adventure!",
              },

              {
                name: "Sophie Martin",
                country: "France",
                tour: "Bhutan Cultural Discovery",
                text: "Bhutan was a dream come true! From the Tiger's Nest monastery to the friendly locals, everything was perfectly arranged. AB Tour Travel truly understands what European travelers are looking for.",
              },
              {
                name: "Marco Rossi",
                country: "Italy",
                tour: "Sri Lanka Highlights",
                text: "Sri Lanka's beaches and wildlife were stunning. The combination of cultural sites and relaxation was exactly what we needed. The team went above and beyond to make our honeymoon special!",
              },
            ].map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-card-top">
                  <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                  <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                </div>

                <p className="review-text">&quot;{review.text}&quot;</p>

                <div className="review-author">
                  <h4>{review.name}</h4>
                  <span>{review.country}</span>
                  <Link to="/tours">{review.tour}</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="review-summary">
            <p>Over 10,000+ satisfied travelers from across Europe</p>
            <div><span className="summary-stars">★★★★★</span> <strong>4.9/5 Average Rating</strong></div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="premium-cta">
        <div className="cta-overlay"></div>

        <div className="container">
          <div className="cta-content">
            <h2>Ready For Your Next Adventure?</h2>

            <p>Plan your dream vacation with AB Tour Travel today.</p>

            <Link to="/contact" className="cta-button">
              Book Your Trip Now
            </Link>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="newsletter">
        <div className="container">
          <h2>Subscribe For Travel Updates</h2>

          <p>Get latest offers and exclusive tour packages.</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />

            <button>Subscribe</button>
          </div>
        </div>
      </section>

      {/* ================= FLOAT BUTTON ================= */}

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

export default Home;
