const { check } = require("express-validator");
exports.signupValidation = [
  // creating a a sign up validator and having requirements for signing up
  check("name", "Name is requied").not().isEmpty(), // provides a prompt
  check("email", "Please include a valid email") // Asks the user to include a a valid email adress
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    // creates a requirement to include a password that has to be 6 or more characters using the isLength and min requirement.
    min: 6,
  }),
];
exports.loginValidation = [
  check("email", "Please include a valid email") // Checks if the email is a valid email format
    .isEmail() // checks if the information entered is a valid email format
    .normalizeEmail({ gmail_remove_dots: true }), //removes any dots from a gmail adrress
  check("password", "Password must be 6 or more characters").isLength({
    //Validation for a password, it also checks if the password is longer than 6 or more characters
    min: 6,
  }),
];

// Server.js file
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const { signupValidation, loginValidation } = require("./validation.js");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.get("/", (req, res) => {
  res.send("Node js file upload rest apis");
});
app.post("/register", signupValidation, (req, res, next) => {
  // your registration code
});
app.post("/login", loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors  This section handles if there are any errors when running the server.
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500; // if an error occurs in this section, the status of the error is set to err.statusCode or 500 if either is not provided
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    // This sends a JSON response with the error status and error message that was provided
    message: err.message,
  });
});
app.listen(3000, () => console.log("Server is running on port 3000"));

// Finally this sets and starts the server on localhost 3000, when the server is ran, "Server is running on port 3000" will be logged to the console

// This piece of code is used to create a user signup and user login by using express
