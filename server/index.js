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
  axios({
    method: "GET",
    url: "https://covid-19-data.p.rapidapi.com/country",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "73c056e900mshfbab3af5eba769dp137327jsn69d1142005a4",
      useQueryString: true,
    },
    params: {
      format: "json",
      name: "italy",
    },
  })
    .then((response) => {
      console.log("RESPONSE", response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
});

app.get("/daily", function (req, res) {
  console.log("REQ", req);
  db.get(req, res);
});

// var unirest = require("unirest");

// var req = unirest("GET", "https://covid-19-data.p.rapidapi.com/country");

// req.query({
//   format: "json",
//   name: "france",
// });

// req.headers({
//   "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
//   "x-rapidapi-key": "73c056e900mshfbab3af5eba769dp137327jsn69d1142005a4",
//   useQueryString: true,
// });

// req.end(function (res) {
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });
