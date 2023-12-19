const fs = require("fs");
const path = require("path");

// Setting up base users list
// let users_list = [
//   {
//     id: 1,
//     name: "Orbán Viktor",
//     email: "viktor.orban@magyaro.gov.hu",
//     about: "I am a very nice and not at all corrupt politician.",
//     image: "1.jpg",
//   },
//   {
//     id: 2,
//     name: "Szijjártó Péter",
//     email: "petya.latya@freemail.hu",
//     about:
//       "I am a very nice and not at all corrupt minister of foreign affairs.",
//     image: "2.jpg",
//   },
// ];

// Setting up base users list with external json file
const dataPath = path.join(__dirname, "../data/users.json");
let users_list = [];
fs.readFile(dataPath, (err, data) => {
  if (err) throw err;
  let parsedData = JSON.parse(data);
  users_list = parsedData.users;
});

// Save users to JSON file
function saveUsers() {
  fs.writeFile(dataPath, JSON.stringify(users_list), (err) => {
    if (err) throw err;
  });
}

// Setting up the model functions
// Getting all users
function getUsers() {
  return users_list;
}

// Getting a single user
function getUser(id) {
  return users_list.find((user) => user.id === parseInt(id));
}

// Creating a new user
function createUser(body, image) {
  nextId = users_list[users_list.length - 1].id + 1;
  user = {
    id: nextId,
    name: body.name,
    email: body.email,
    about: body.about,
    image: nextId + ".jpg",
  };
  // TODO: Error handling and checking if image is a jpg or png
  image.mv(`./public/uploads/${nextId}.jpg`);
  users_list.push(user);
  saveUsers();
}

// Editing a user
function updateUser(id, body) {
  user = getUser(id);
  user.name = body.name;
  user.email = body.email;
  user.about = body.about;
  saveUsers();
}

// Deleting a user
function deleteUser(id) {
  // Deleting user from users list
  users_list = users_list.filter((user) => user.id !== parseInt(id));
  // Deleting image associated with user id
  fs.unlink(`./public/uploads/${id}.jpg`, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  saveUsers();
}

// Exporting for controller
module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
