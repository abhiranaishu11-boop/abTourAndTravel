const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    adults: {
      type: Number,
      required: true,
      min: 1,
    },

    children: {
      type: Number,
      default: 0,
    },

    childAges: [
      {
        type: Number,
      },
    ],

    days: {
      type: Number,
      required: true,
    },

    startDate: {
      type: String,
      required: true,
    },

    endDate: {
      type: String,
      required: true,
    },

    hotelCategory: {
      type: String,
      required: true,
    },

    mealPlan: {
      type: String,
      required: true,
    },

    roomType: {
      type: String,
      required: true,
    },

    vehicleType: {
      type: String,
      required: true,
    },

    guideDuration: {
      type: String,
      default: "",
    },

    guideLanguage: {
      type: String,
      default: "English",
    },

    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);