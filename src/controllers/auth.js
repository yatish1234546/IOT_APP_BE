const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      userName: req.body.userName
    });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const checkPassword = user.password === req.body.password ? true : false;

    if (!checkPassword) {
      return res.status(404).send("Password does not match");
    }

    const token = jwt.sign(
      {
        userName: user.userName,
        userId: user._id.toString()
      },
      "dbs",
      {
        expiresIn: "1d"
      }
    );

    res.status(200).json({
      token,
      name: user.name,
      user: user.userName
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
