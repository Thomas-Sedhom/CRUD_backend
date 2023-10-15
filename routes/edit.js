const express = require("express");
const router = express.Router();
const edit_controller = require("../controllers/edit_controller.js");

router.get("/", edit_controller.get_data);

module.exports = router;