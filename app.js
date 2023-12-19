// Express for connecting to the server generally
const express = require("express");
// Body parser for parsing the body of the request
const bodyParser = require("body-parser");
// Cors for allowing cross origin requests (security)
const cors = require("cors");
// File upload for uploading files to the server
const fileUpload = require("express-fileupload");
// Path for joining paths 
const path = require("path");
// EJS for rendering HTML files in views
const ejs = require("ejs");

// Setting up the server
const app = express();
const port = 3000;

// Using the imported packages in the application
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// Setting up the uploads directory as a static directory
app.use(express.static("public"));

// Setting up the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Setting up routers / routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// Using the routers / routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Starting the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})