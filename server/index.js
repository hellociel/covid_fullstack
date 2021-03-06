// Import the express framework for our node server
const express = require("express");
// Import the path module from node to create absolute file paths for express static
const path = require("path");

const db = require("../database/index.js");

const axios = require("axios");
// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = 3000;

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, "../client/dist")));
// Start the server on the provided port
app.listen(PORT, () => console.log("Listening on port: " + PORT));

app.get("/country", function (req, res) {
  db.getCountry(req, res);
});
app.get("/global", function (req, res) {
  db.getGlobal(req, res);
});
app.get("/all", function (req, res) {
  db.getAll(req, res);
});
app.get("/topcases", function (req, res) {
  db.getCases(req, res);
});
app.get("/topdeceased", function (req, res) {
  db.getDeceased(req, res);
});
app.get("/toptested", function (req, res) {
  console.log("tested in server");
  db.getTested(req, res);
});
app.get("/continent", function (req, res) {
  db.getByContinent(req, res);
});

var options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  headers: {
    "x-rapidapi-key": "be8602e237msh53413be8a6cc1bbp117009jsnc943b3810ebf",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
};

app.get("/total", function (req, res) {
  console.log("total");
  axios
    .request(options)
    .then((response) => {
      console.log("RESPONSE from api", response.data.response);
      let countries = response.data.response;
      console.log(countries[5]);
      db.saveCountries(countries);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
});
