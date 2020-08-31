const mongoose = require("mongoose");
const Facility = mongoose.model("Facility");

module.exports = async (req, res, next) => {
  const facility = await Facility.find();

  req.facilityId = facility[0].id;
  next();
};
