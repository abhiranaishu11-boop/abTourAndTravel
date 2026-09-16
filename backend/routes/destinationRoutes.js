const express = require("express");
const router = express.Router();

const {
  getDestinations,
  getSingleDestination,
  createDestination,
  updateDestination,
  deleteDestination,
} = require("../controllers/destinationController");

const authMiddleware = require("../middleware/authMiddleware");

// Public
router.get("/", getDestinations);
router.get("/:id", getSingleDestination);

// Admin
router.post("/", authMiddleware, createDestination);
router.put("/:id", authMiddleware, updateDestination);
router.delete("/:id", authMiddleware, deleteDestination);

module.exports = router;