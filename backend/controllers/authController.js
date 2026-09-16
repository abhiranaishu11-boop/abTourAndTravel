const Admin = require("../models/Admin");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const sendOTP = require("../utils/sendOTP");

// ===========================
// Admin Login
// ===========================

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ===========================
// Send OTP
// ===========================

exports.sendOTP = async (req, res) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Admin email is required",
      });
    }

    let admin = await Admin.findOne({ email });

    // The configured notification email is the single OTP admin identity.
    const configuredAdminEmail = String(
      process.env.ADMIN_EMAIL || process.env.EMAIL || "",
    ).trim().toLowerCase();

    if (!admin && email === configuredAdminEmail) {
      try {
        admin = await Admin.create({
          email,
          password: crypto.randomBytes(32).toString("hex"),
          role: "admin",
        });
      } catch (error) {
        console.error("Admin provisioning failed:", error.message);
        return res.status(500).json({
          success: false,
          message: "Unable to create the admin account",
        });
      }
    }

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Email not found",
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    admin.otp = otp;
    admin.otpExpire = Date.now() + 10 * 60 * 1000;

    await admin.save();

    const emailSent = await sendOTP(email, otp);

    if (!emailSent) {
      return res.status(502).json({
        success: false,
        message: "OTP email could not be sent. Check Gmail configuration.",
      });
    }

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {

    console.error("Send OTP failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// ===========================
// Verify OTP
// ===========================

exports.verifyOTP = async (req, res) => {

  try {

    const email = String(req.body.email || "").trim().toLowerCase();
    const { otp } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    if (
      admin.otp !== otp ||
      admin.otpExpire < Date.now()
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    admin.otp = null;
    admin.otpExpire = null;
    await admin.save();

    res.status(200).json({
      success: true,
      message: "OTP verified",
      token,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// ===========================
// Reset Password
// ===========================

exports.resetPassword = async (req, res) => {

  try {

    const {
      email,
      otp,
      newPassword,
    } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    if (
      admin.otp !== otp ||
      admin.otpExpire < Date.now()
    ) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    if (!newPassword || newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 8 characters",
      });
    }

    admin.password = newPassword;

    admin.otp = null;
    admin.otpExpire = null;

    await admin.save();

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};