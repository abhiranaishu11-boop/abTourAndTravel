import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "../config/contact";

function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    destination: "",
    adults: 1,
    children: 0,
    childAges: [],
    days: 1,
    startDate: "",
    endDate: "",
    hotelCategory: "",
    mealPlan: "",
    roomType: "",
    vehicleType: "",
    guideDuration: "",
    guideLanguage: "English",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Generic input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Children count change
  const handleChildrenCountChange = (e) => {
    const count = parseInt(e.target.value, 10) || 0;
    const updatedAges = Array(count).fill("");
    setFormData({ ...formData, children: count, childAges: updatedAges });
  };

  // Each child's age
  const handleChildChange = (index, value) => {
    const newAges = [...formData.childAges];
    newAges[index] = value;
    setFormData({ ...formData, childAges: newAges });
  };

  // Calculate end date based on start date + days
  const calculateEndDate = (start, days) => {
    if (!start || days <= 0) return "";
    const date = new Date(start);
    date.setDate(date.getDate() + days - 1);
    return date.toISOString().split("T")[0];
  };

  const handleStartDateChange = (e) => {
    const start = e.target.value;
    const end = calculateEndDate(start, formData.days);
    setFormData({ ...formData, startDate: start, endDate: end });
  };

  const handleDaysChange = (e) => {
    const days = parseInt(e.target.value, 10) || 1;
    const end = calculateEndDate(formData.startDate, days);
    setFormData({ ...formData, days, endDate: end });
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setMessage("");

      await axios.post(`${API_URL}/api/bookings/contact`, formData);

      setMessage("✅ Booking Submitted Successfully!");

      // Reset form
      setFormData({
        name: "",
        contactNumber: "",
        destination: "",
        adults: 1,
        children: 0,
        childAges: [],
        days: 1,
        startDate: "",
        endDate: "",
        hotelCategory: "",
        mealPlan: "",
        roomType: "",
        vehicleType: "",
        guideDuration: "",
        guideLanguage: "English",
      });
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message ||
          "❌ Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* ================= HERO ================= */}

      <section className="booking-hero">
        <div className="container">
          <h1 data-aos="zoom-in">Plan Your Dream Journey</h1>

          <p data-aos="fade-up">
            Fill the details and we will create a perfect travel experience for
            you
          </p>
        </div>
      </section>

      {/* ================= BOOKING SECTION ================= */}

      <section className="booking-section">
        <div className="container">
          <div className="row g-4">
            {/* LEFT INFO */}

            <div className="col-lg-4" data-aos="fade-right">
              <div className="booking-info-card">
                <h3>Why Book With Us?</h3>

                <div className="booking-feature">
                  <i className="bi bi-globe2"></i>

                  <div>
                    <h5>Customized Trips</h5>

                    <p>
                      Personalized itinerary according to your budget and
                      interest.
                    </p>
                  </div>
                </div>

                <div className="booking-feature">
                  <i className="bi bi-shield-check"></i>

                  <div>
                    <h5>Safe Travel</h5>

                    <p>Verified hotels, vehicles and professional guides.</p>
                  </div>
                </div>

                <div className="booking-feature">
                  <i className="bi bi-wallet2"></i>

                  <div>
                    <h5>Best Price</h5>

                    <p>Affordable packages without compromising quality.</p>
                  </div>
                </div>

                <div className="support-box">
                  <h5>Need Help?</h5>

                  <p>📞 {CONTACT_PHONE_DISPLAY}</p>

                  <p>✉ {CONTACT_EMAIL}</p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}

            <div className="col-lg-8" data-aos="fade-left">
              <div className="booking-form-card">
                <h2>Travel Booking Form</h2>

                <p>Tell us about your trip requirements</p>

                {message && (
                  <div
                    className={`form-message ${
                      message.startsWith("✅") ? "success" : "error"
                    }`}
                    role="status"
                  >
                    {message}
                  </div>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row className="g-4">
                    <Col md={4}>
                      <Form.Label>Full Name</Form.Label>

                      <Form.Control
                        className="premium-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                      />
                    </Col>

                    <Col md={4}>
                      <Form.Label>Contact Number</Form.Label>

                      <Form.Control
                        className="premium-input"
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                      />
                    </Col>

                    <Col md={4}>
                      <Form.Label>Destination</Form.Label>

                      <Form.Control
                        className="premium-input"
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Goa, Kerala..."
                      />
                    </Col>

                    {/* Adults Children */}

                    <Col md={6}>
                      <Form.Label>Adults</Form.Label>

                      <Form.Control
                        className="premium-input"
                        type="number"
                        name="adults"
                        value={formData.adults}
                        min="1"
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Children (Below 8)</Form.Label>

                      <Form.Control
                        className="premium-input"
                        type="number"
                        value={formData.children}
                        min="0"
                        onChange={handleChildrenCountChange}
                      />
                    </Col>

                    {/* CHILD AGE */}

                    {formData.children > 0 &&
                      formData.childAges.map((age, index) => (
                        <Col md={3} key={index}>
                          <Form.Label>Child {index + 1} Age</Form.Label>

                          <Form.Control
                            className="premium-input"
                            type="number"
                            value={age}
                            min="1"
                            max="25"
                            onChange={(e) =>
                              handleChildChange(index, e.target.value)
                            }
                          />
                        </Col>
                      ))}

                    {/* DAYS */}

                    <Col md={6}>
                      <Form.Label>Number of Days</Form.Label>

                      <Form.Control
                        className="premium-input"
                        type="number"
                        min="1"
                        value={formData.days}
                        onChange={handleDaysChange}
                      />
                    </Col>

                    {/* DATE */}

                    <Col md={6}>
                      <Form.Label>Start Date</Form.Label>

                      <Form.Control
                        className="premium-input"
                        type="date"
                        value={formData.startDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={handleStartDateChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>End Date</Form.Label>

                      <Form.Control
                        className="premium-input"
                        type="date"
                        value={formData.endDate}
                        readOnly
                      />
                    </Col>

                    {/* HOTEL */}

                    <Col md={3}>
                      <Form.Label>Hotel</Form.Label>

                      <Form.Select
                        className="premium-input"
                        name="hotelCategory"
                        value={formData.hotelCategory}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>

                        <option>3 Star</option>

                        <option>4 Star</option>

                        <option>5 Star</option>
                      </Form.Select>
                    </Col>

                    <Col md={3}>
                      <Form.Label>Meal Plan</Form.Label>

                      <Form.Select
                        className="premium-input"
                        name="mealPlan"
                        value={formData.mealPlan}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>

                        <option>Breakfast</option>

                        <option>Breakfast + Dinner</option>
                      </Form.Select>
                    </Col>

                    <Col md={3}>
                      <Form.Label>Room Type</Form.Label>

                      <Form.Select
                        className="premium-input"
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>

                        <option>DBC</option>

                        <option>SNC</option>
                      </Form.Select>
                    </Col>

                    <Col md={3}>
                      <Form.Label>Vehicle</Form.Label>

                      <Form.Select
                        className="premium-input"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>

                        <option>Economy</option>

                        <option>SUV</option>

                        <option>Minivan</option>
                      </Form.Select>
                    </Col>

                    {/* GUIDE */}

                    <Col md={6}>
                      <Form.Label>Guide Duration</Form.Label>

                      <Form.Control
                        className="premium-input"
                        type="text"
                        name="guideDuration"
                        value={formData.guideDuration}
                        onChange={handleChange}
                        placeholder="2 hours"
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Guide Language</Form.Label>

                      <Form.Select
                        className="premium-input"
                        name="guideLanguage"
                        value={formData.guideLanguage}
                        onChange={handleChange}
                      >
                        <option>English</option>

                        <option>Hindi</option>

                        <option>Other</option>
                      </Form.Select>
                    </Col>

                    {/* BUTTON */}

                    <Col md={12}>
                      <button
                        className="premium-submit"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? (
                          "Submitting..."
                        ) : (
                          <>
                            <i className="bi bi-send-fill"></i>
                            Submit Booking
                          </>
                        )}
                      </button>

                      <p className="privacy-text">
                        🔒 Your information is safe with us. We never share your
                        details.
                      </p>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="booking-faq">
        <div className="container">
          <h2 data-aos="fade-up">Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div
              className={`faq-box ${openFaq === 0 ? "is-open" : ""}`}
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
            >
              <h5>How early should I book?</h5>

              <p>2-3 months before travel is recommended.</p>
            </div>

            <div
              className={`faq-box ${openFaq === 1 ? "is-open" : ""}`}
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
            >
              <h5>Can I customize my package?</h5>

              <p>Yes, every trip can be personalized.</p>
            </div>

            <div
              className={`faq-box ${openFaq === 2 ? "is-open" : ""}`}
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
            >
              <h5>Do you provide guides?</h5>

              <p>Professional guides are available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM FOOTER ================= */}

      <footer className="footer">
        <div className="container">
          <div className="row text-start">
            <div className="col-lg-4 col-md-6 mb-4">
              <h5>AB Tour Travel</h5>

              <p>
                Your trusted partner for unforgettable journeys across India,
                Nepal, Bhutan and Sri Lanka.
              </p>

              <div className="d-flex gap-3 mt-4">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-youtube"></i>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Quick Links</h5>

              <Link to="/">Home</Link>
              <Link to="/destinations">Destinations</Link>
              <Link to="/tours">Tours</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Popular Destinations</h5>

              <Link to="#">Jaipur</Link>
              <Link to="#">Goa</Link>
              <Link to="#">Kerala</Link>
              <Link to="#">Manali</Link>
              <Link to="#">Kashmir</Link>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Contact Us</h5>

              <p>
                <i className="bi bi-geo-alt-fill me-2"></i>
                New Delhi, India
              </p>

              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                {CONTACT_PHONE_DISPLAY}
              </p>

              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                {CONTACT_EMAIL}
              </p>

              <p>
                <i className="bi bi-clock-fill me-2"></i>
                Mon - Sat : 9AM - 6PM
              </p>
            </div>
          </div>

          <hr />

          <div className="footer-bottom">
            © 2026 AB Tour Travel. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div> // <-- main return div close
  );
}

export default Contact;
