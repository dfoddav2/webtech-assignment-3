// Importing neccessary modules
const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

// Setting up the different sub-routes
router.get("/", indexController.getHome);


module.exports = router;