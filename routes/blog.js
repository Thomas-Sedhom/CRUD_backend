const express = require("express");
const router = express.Router();
const Data = require("../models/database.js");
const blog_controller = require("../controllers/blog_controller.js");

router.get("/", blog_controller.get_data)

router.post("/", blog_controller.post_data )

router.delete("/:id", blog_controller.delete_data)

module.exports = router;