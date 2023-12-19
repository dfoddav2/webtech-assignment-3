// Importing neccessary modules
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Setting up the different sub-routes
router.get("/", userController.getUsers);
// Routes for creating a new user
router.get("/new", userController.newUser);
router.post("/new", userController.createUser);
// Route for getting a single user (after creating a user, because new would be interpreted as an id)
router.get("/:id", userController.getUser);
// Routes for editing a user's data
router.get("/:id/edit", userController.editUser);
// put would be more semantically coreect, but could not make method-override package work, so this will stay as a post
router.post("/:id/edit", userController.updateUser);
// Route for deleting a user
// Here the delete method makes more sense, thus that is what I did, using a button
router.delete("/:id", userController.deleteUser);


// Exporting for app.js
module.exports = router;