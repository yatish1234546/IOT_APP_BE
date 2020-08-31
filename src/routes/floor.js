const express = require("express");
const router = express.Router();
const facilityMiddleware = require("../middlewares/facilityMiddleware");
const requireAuth = require("../middlewares/requireAuth");

const floorController = require("../controllers/floor");
router.use(requireAuth);
router.use(facilityMiddleware);

router.post("/addFloor", floorController.addFloor);
router.get("/getFloors", floorController.getFloor);

module.exports = router;
