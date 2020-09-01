const mongoose = require("mongoose");

const floorSchema = new mongoose.Schema({
  facilityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Facility"
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: Number,
    required: true,
    unique: true
  },
  mode: {
    type: String,
    required: true
  },
  clusters: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("Floor", floorSchema);
