// server/models/Driver.js
const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    truckType: { type: String, required: true }, // free text
    truckCategory: {
      type: String,
      enum: ["mini", "medium", "heavy"],
      required: true, // for matching
    },
    city: { type: String, required: true }, // base city
    notes: String,

    aadharNumber: String,
    dlNumber: String,

    // Availability
    isAvailable: { type: Boolean, default: false },
    currentCity: { type: String }, // can override base city if driver moves
  },
  { timestamps: true }
);

module.exports = mongoose.model("Driver", driverSchema);
