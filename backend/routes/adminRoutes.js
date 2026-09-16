const express = require("express");
const router = express.Router();

const {
  getBookings,
  getDashboard,
  deleteBooking,
} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");

// Dashboard
router.get("/dashboard", authMiddleware, getDashboard);

// All Bookings
router.get("/bookings", authMiddleware, getBookings);
router.delete("/bookings/:id", authMiddleware, deleteBooking);

module.exports = router;