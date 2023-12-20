// Importing neccessary modules
const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

// Setting up the single home route
router.get("/", indexController.getHome);

// Exporting for app.js
module.exports = router;