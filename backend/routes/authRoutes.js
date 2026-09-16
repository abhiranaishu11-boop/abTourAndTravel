const express = require("express");

const router = express.Router();

const {
  login,
  sendOTP,
  verifyOTP,
  resetPassword,
} = require("../controllers/authController");

// Admin Login
router.post("/login", login);

// Send OTP
router.post("/send-otp", sendOTP);

// Verify OTP
router.post("/verify-otp", verifyOTP);

// Reset Password
router.post("/reset-password", resetPassword);

module.exports = router;