const Floor = require("../models/floor");
const Facility = require("../models/facility");

exports.getFloor = async (req, res) => {
  try {
    const floors = await Floor.find({});
    res.send(floors);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.addFloor = async (req, res) => {
  try {
    const { name, number, mode } = req.body;
    if (!name || !number || !mode) {
      return res.status(422).send({
        error: "You must provide Floor Name, Number and Current Mode"
      });
    }
    const floor = new Floor({ facilityId: req.facilityId, name, number, mode });
    await floor.save();
    updateFacility(floor);
    res.status(200).send(floor);
  } catch (error) {
    console.log(error.message);
    return res.status(400).send(error.message);
  }
};

const updateFacility = async floor => {
  const [f] = await Facility.find();
  f.floors.push(floor);
  f.floors = f.floors.sort((a, b) => {
    if (a.number > b.number) return 1;
    if (b.number > a.number) return -1;
  });
  const facility = new Facility(f);
  await facility.save();
};
