const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Test Facility"
  },
  current_mode: {
    type: String,
    default: "Operational"
  },
  address: {
    street: { type: String, default: "Vijayanand Cross" },
    locality: { type: String, default: "Rani Chennamma Nagar" },
    region: { type: String, default: "Dharwad" },
    postalCode: { type: String, default: "580001" },
    country: { type: String, default: "India" }
  },
  floors: []
});

module.exports = mongoose.model("Facility", facilitySchema);
