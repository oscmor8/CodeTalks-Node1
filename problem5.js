var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost", // Sets a specific host where mysql is created. In this case it is in our localhost
  user: "your username", // Sets the username needed to validate the data base, it is asking the user for their username
  password: "your password", // sets the password needed to validate the user database
  database: "your database name", // sets the specific name of the database the user wants to connect to
});
connection.connect(function (error) {
  // creates a conditional if the connection was succesfull or not
  if (!!error) {
    // by using (!!error) we can make sure the result will either be true or false
    console.log(error); // if there is an error, log error to the console
  } else {
    console.log("Connected!:)"); // if there is not an error log "connected!" to the console
  }
});
module.exports = connection;

// This piece of code is used to make a link between a mySQL database and node.js. It is used to retirve specific data or update data.
