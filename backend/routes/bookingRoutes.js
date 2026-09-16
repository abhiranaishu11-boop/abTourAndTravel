const express=require("express");

const router=express.Router();

const bookingController=require("../controllers/bookingController");

const adminAuth=require("../middleware/authMiddleware");

router.post("/contact",bookingController.createBooking);

router.get("/admin/bookings",adminAuth,bookingController.getBookings);

module.exports=router;