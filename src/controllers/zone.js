const Zone = require("../models/zone");

exports.createZone = async (req, res) => {
  try {
    const zone = new Zone(req.body);
    await zone.save();
    res.status(201).send(zone);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.getZones = async (req, res) => {
  try {
    const zones = await Zone.find({});
    res.status(200).send(zones);
  } catch (error) {
    res.status(404).send(error);
  }
};
