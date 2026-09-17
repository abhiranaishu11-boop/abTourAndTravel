import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { CONTACT_EMAIL } from "../config/contact";
import { API_URL } from "../config/api";

import {
  FaLock,
  FaSearch,
  FaSyncAlt,
  FaUsers,
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaPhoneAlt,
  FaHotel,
  FaCar,
  FaTrashAlt,
} from "react-icons/fa";

import "./Admin.css";

function Admin() {
  const [email] = useState(CONTACT_EMAIL);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const [isAuth, setIsAuth] = useState(false);

  const [bookings, setBookings] = useState([]);

  const [filteredBookings, setFilteredBookings] = useState([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const authConfig = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    },
  });

  const sendLoginOtp = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/auth/send-otp`, { email });
      setOtpSent(true);
      setLoginMessage(response.data.message || "OTP sent to your admin email");
    } catch (error) {
      setLoginMessage(error.response?.data?.message || "Unable to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyLoginOtp = async () => {
    if (!otp.trim()) {
      setLoginMessage("Enter the OTP received by email");
      return;
    }

    try {
      setLoading(true);
      const loginRes = await axios.post(`${API_URL}/api/auth/verify-otp`, { email, otp });
      localStorage.setItem("adminToken", loginRes.data.token);

      const res = await axios.get(`${API_URL}/api/admin/bookings`, authConfig());
      setBookings(res.data.bookings || []);
      setFilteredBookings(res.data.bookings || []);
      setIsAuth(true);
    } catch (error) {
      setLoginMessage(error.response?.data?.message || "Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const result = bookings.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.destination.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredBookings(result);
  }, [search, bookings]);

  const refreshBookings = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/admin/bookings`, authConfig());
      setBookings(res.data.bookings || []);
      setFilteredBookings(res.data.bookings || []);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        setIsAuth(false);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      refreshBookings();
      setIsAuth(true);
    }
  }, [refreshBookings]);

  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;
    try {
      await axios.delete(`${API_URL}/api/admin/bookings/${id}`, authConfig());
      setBookings((current) => current.filter((booking) => booking._id !== id));
    } catch (error) {
      alert(error.response?.data?.message || "Unable to delete booking");
    }
  };

  if (!isAuth) {
    return (
      <div className="admin-login-page">
        <div className="login-card" data-aos="zoom-in">
          <div className="login-icon"><FaLock /></div>
          <h2>Admin Dashboard</h2>
          <p>OTP login required for every access</p>

          <div className="password-box">
            <input type="email" value={email} readOnly aria-label="Admin email" />
          </div>

          {!otpSent ? (
            <button className="login-btn" onClick={sendLoginOtp}>
              {loading ? "Sending OTP..." : "Send Login OTP"}
            </button>
          ) : (
            <>
              <input
                className="otp-input"
                type="text"
                inputMode="numeric"
                placeholder="Enter OTP"
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
              />
              <button className="login-btn" onClick={verifyLoginOtp}>
                {loading ? "Verifying..." : "Verify OTP & Open Admin"}
              </button>
              <button className="forgot-btn" onClick={sendLoginOtp}>Resend OTP</button>
            </>
          )}

          {loginMessage && <small className="reset-message">{loginMessage}</small>}
        </div>
      </div>
    );
  }
  return (
    <div className="admin-dashboard">
      {/* ================= HERO ================= */}

      <section className="admin-hero">
        <div className="container">
          <h1 data-aos="fade-down">Travel Booking Dashboard</h1>

          <p data-aos="fade-up">Manage all customer bookings from one place.</p>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <div className="container">
        <div className="stats-grid">
          <div className="stat-card" data-aos="zoom-in">
            <FaUsers className="stat-icon" />

            <h2>{bookings.length}</h2>

            <p>Total Bookings</p>
          </div>

          <div className="stat-card" data-aos="zoom-in" data-aos-delay="150">
            <FaMapMarkedAlt className="stat-icon" />

            <h2>{[...new Set(bookings.map((b) => b.destination))].length}</h2>

            <p>Destinations</p>
          </div>

          <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
            <FaCalendarAlt className="stat-icon" />

            <h2>{filteredBookings.length}</h2>

            <p>Showing Results</p>
          </div>
        </div>

        {/* ================= SEARCH ================= */}

        <div className="search-box" data-aos="fade-up">
          <FaSearch />

          <input
            type="text"
            placeholder="Search by Name or Destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="refresh-btn" onClick={refreshBookings}>
            <FaSyncAlt />
          </button>
        </div>

        {/* ================= BOOKINGS ================= */}

        <div className="row">
          {filteredBookings.length === 0 ? (
            <div className="text-center mt-5">
              <h3>No Bookings Found</h3>
            </div>
          ) : (
            filteredBookings.map((item, index) => (
              <div
                className="col-lg-6 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="booking-card">
                  <div className="booking-header">
                    <h3>{item.name}</h3>

                    <span>{item.destination}</span>
                  </div>

                  <div className="booking-body">
                    <p>
                      <FaPhoneAlt />
                      <strong> Contact :</strong> {item.contactNumber}
                    </p>

                    <p>
                      👨 Adults :<strong> {item.adults}</strong>
                    </p>

                    <p>
                      👶 Children :<strong> {item.children}</strong>
                    </p>

                    {item.childAges?.length > 0 && (
                      <p>Child Ages : {item.childAges.join(", ")}</p>
                    )}

                    <p>
                      📅 {item.startDate} → {item.endDate}
                    </p>

                    <p>🏨 {item.hotelCategory}</p>

                    <p>🍽 {item.mealPlan}</p>

                    <p>🛏 {item.roomType}</p>

                    <p>
                      <FaCar /> {item.vehicleType}
                    </p>

                    <p>Guide : {item.guideDuration || "N/A"}</p>

                    <p>Language : {item.guideLanguage}</p>
                  </div>

                  <div className="booking-footer">
                    <small>
                      Submitted : {new Date(item.createdAt).toLocaleString()}
                    </small>

                    <button
                      className="delete-btn"
                      onClick={() => deleteBooking(item._id)}
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
