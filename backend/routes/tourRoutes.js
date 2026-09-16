const express = require("express");
const router = express.Router();

const {
  getTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");

const authMiddleware = require("../middleware/authMiddleware");

// Public Routes
router.get("/", getTours);
router.get("/:id", getSingleTour);

// Admin Routes
router.post("/", authMiddleware, createTour);
router.put("/:id", authMiddleware, updateTour);
router.delete("/:id", authMiddleware, deleteTour);

module.exports = router;