const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");

const userController = require("../controllers/user");

// router.use(requireAuth);

router.get("/getUsers", userController.getUsers);
router.post("/addUser", userController.addUser);
router.put("/editUser", userController.editUser);

module.exports = router;
