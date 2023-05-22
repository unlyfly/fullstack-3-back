const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projects");

router.get("/", projectController.getProject);

module.exports = router;