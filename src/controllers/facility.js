const Facility = require("../models/facility");

const facility = async () => {
  try {
    const existingFacility = await Facility.find();
    if (existingFacility.length === 0) {
      const createFacility = new Facility();
      await createFacility.save();
    }
  } catch (error) {
    console.log(error);
  }
};
facility();
