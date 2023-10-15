const express = require("express");
const router = express.Router();
const Data = require("../models/database");
const details_controller = require("../controllers/details_controller");

router.get("/:id", details_controller.get_data);

module.exports = router;