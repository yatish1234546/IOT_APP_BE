const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const zoneController = require("../controllers/zone");
router.use(requireAuth);

router.post("/createZone", zoneController.createZone);
router.get("/getAllZones", zoneController.getZones);

module.exports = router;
