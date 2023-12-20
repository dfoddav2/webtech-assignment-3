// Importing the userModel to use its functions / logic
const userModel = require("../models/userModel.js");

// Setting up the controller functions
// Getting all users
function getUsers(req, res) {
    // console.log(userModel.getUsers())
    res.render("users", {users_list: userModel.getUsers()});
}

// Getting a single user
function getUser(req, res) {
    res.render("user", {user: userModel.getUser(req.params.id)});
}

// Creating a new user
function newUser(req, res) {
    res.render("newUser");
}

function createUser(req, res) {
    userModel.createUser(req.body, req.files.image);
    res.redirect("/users");
}

// Editing a user
function editUser(req, res) {
    res.render("editUser", {user: userModel.getUser(req.params.id)});
}

function updateUser(req, res) {
    userModel.updateUser(req.params.id, req.body);
    res.redirect(`/users/${req.params.id}`);
}

// Deleting a user
function deleteUser(req, res) {
    // console.log("Deleting user: " + req.params.id);
    userModel.deleteUser(req.params.id);
    // console.log("User deleted, now redirecting...");
    // res.redirect("/users");
    // res.redirect would not work here, so used window.location.href in the view instead
    res.sendStatus(200);
}

// Exporting for routes
module.exports = {
    getUsers,
    getUser,
    newUser,
    createUser,
    editUser,
    updateUser,
    deleteUser
}