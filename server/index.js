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
app.get("/total", function (req, res) {
  axios({
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "73c056e900mshfbab3af5eba769dp137327jsn69d1142005a4",
      useQueryString: true,
    },
  })
    .then((response) => {
      // console.log("RESPONSE", response.data.response);
      let countries = response.data.response;
      console.log(countries[5]);
      db.saveCountries(countries);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
});
