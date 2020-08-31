const User = require("../models/user");

exports.addUser = async (req, res) => {
  try {
    const { firstName, lastName, userName, roles, email, password } = req.body;
    if (!email) {
      return res.status(422).send({ error: "You must provide Email" });
    }

    const user = new User({
      firstName,
      lastName,
      userName,
      roles,
      password,
      email
    });
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    console.log(error.message);
    return res.status(400).send(error.message);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findById(req.body._id);
    if (!user) {
      return res.status(422).send({ error: "User Not found" });
    }
    const { firstName, lastName, userName, roles, email, password } = req.body;
    const updatedUser = await User.updateOne({
      _id: req.body._id,
      firstName,
      lastName,
      userName,
      roles,
      email,
      password
    });

    res.status(201).send("User Updated Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};
