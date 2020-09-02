const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema({
  floorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Floor"
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: Number,
    unique: true
  },
  devices: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("Zone", zoneSchema);
