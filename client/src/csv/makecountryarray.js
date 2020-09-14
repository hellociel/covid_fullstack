var fs = require("fs");

// Use fs.readFile() method to read the file
// let countriesString = "";
// fs.readFile(
//   "/Users/ciel/Desktop/mvp-webapp/client/src/csv/countrynames - Sheet1.csv",
//   "utf8",
//   function (err, data) {
//     // Display the file content
//     for (let i = 0; i < data.length; i++) {
//       countries.push(data);
//       console.log("COUNTRIES", countries);
//     }
//   }
// );
let countries = [];
var data = fs
  .readFileSync(
    "/Users/ciel/Desktop/mvp-webapp/client/src/csv/countrynames - Sheet1.csv"
  )
  .toString() // convert Buffer to string
  .split("\n") // split string to lines
  .forEach((e) => countries.push(e.trim())); // remove white spaces for each line
console.log(countries);

// for (let i = 0; i < countries.length; i++) {
//   fs.writeFile("countriesarray.js", countries[i], function (err) {
//     if (err) return console.log(err);
//     console.log("array created");
//   });
// }
