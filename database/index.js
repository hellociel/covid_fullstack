const { response } = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "worldcorona",
});

connection.connect();

const getCountry = function (req, res) {
  let name = req.query.country;
  console.log("NAME", name);
  connection.query(
    `SELECT * FROM countries WHERE name="${name}";`,
    (err, data) => {
      console.log("result from db", data[0]);
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data[0]);
    }
  );
};

const getGlobal = function (req, res) {
  let name = req.query.country;
  console.log("NAME", name);
  connection.query(`SELECT * FROM countries WHERE name="All";`, (err, data) => {
    console.log("result from db", data[0]);
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(data[0]);
  });
};

const getCases = function (req, res) {
  let name = req.query.country;
  console.log("NAME", name);
  connection.query(
    `SELECT name, population, newcases, totalcases FROM countries ORDER BY totalcases LIMIT 30;`,
    (err, data) => {
      console.log("result from db", data[0]);
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data[0]);
    }
  );
};

const getDeceased = function (req, res) {
  let name = req.query.country;
  console.log("NAME", name);
  connection.query(
    `SELECT name, population, newdeaths, totaldeaths, criticalcases  FROM countries ORDER BY totaldeaths LIMIT 30;`,
    (err, data) => {
      console.log("result from db", data[0]);
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data[0]);
    }
  );
};

const getTested = function (req, res) {
  let name = req.query.country;
  // console.log("NAME", name);
  connection.query(
    `SELECT name, population, totaltests FROM countries ORDER BY (totaltests/population) LIMIT 30;`,
    (err, data) => {
      console.log("result from db", data[0]);
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data[0]);
    }
  );
};

const getByContinent = function (req, res) {
  let name = req.query.continent;
  // console.log("NAME", name);
  connection.query(
    `SELECT * FROM countries WHERE continent="${name}" ORDER BY (totalcases);`,
    (err, data) => {
      console.log("result from db", data[0]);
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data[0]);
    }
  );
};
// const getCountryNames = function (req, res) {
//   connection.query(`SELECT name FROM countries WHERE id > 120;`, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// };

const saveCountries = function (countries) {
  // console.log(countries[0]);
  for (let i = 0; i < countries.length; i++) {
    let continent = countries[i].continent;
    let name = countries[i].country;
    let population = countries[i].population;
    let newcases = countries[i].cases.new;
    let activecases = countries[i].cases.active;
    let criticalcases = countries[i].cases.critical;
    let recoveredcases = countries[i].cases.recovered;
    let totalcases = countries[i].cases.total;
    let newdeaths = countries[i].deaths.new;
    let totaldeaths = countries[i].deaths.total;
    let totaltests = countries[i].tests.total;
    let updatedday = countries[i].day;
    let cuttime = countries[i].time.split("+")[1];
    let updatedtime =
      updatedday + " " + countries[i].time.split("+")[0].split("T")[1];

    // updatedday + " " + countries[i].time.split("+")[0].split("T")[1];
    // console.log("TIME", updatedtime);
    connection.query(
      `INSERT INTO countries (continent, name, population, newcases, activecases, criticalcases, recoveredcases, totalcases, newdeaths, totaldeaths, totaltests, updatedday, updatedtime) VALUES ("${continent}", "${name}", ${population}, "${newcases}", ${activecases}, ${criticalcases}, ${recoveredcases}, ${totalcases}, ${newdeaths}, ${totaldeaths}, ${totaltests}, "${updatedday}", "${updatedtime}");`
    );
  }
};

// connection.query("SELECT 1 + 1 AS solution"=""let function (error="" results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

exports.getCountry = getCountry;
exports.getGlobal = getGlobal;
exports.saveCountries = saveCountries;
exports.getCases = getCases;
exports.getDeceased = getDeceased;
exports.getTested = getTested;
exports.getByContinent = getByContinent;
// (continent, name, population, newcases, activecases, criticalcases, recoveredcases, totalcases, newdeaths, totaldeaths, totaltests, updatedday, updatedtime)
// `INSERT INTO countries (continent, name, population, newcases, activecases, criticalcases, recoveredcases, totalcases, newdeaths, totaldeaths, totaltests, updatedday, updatedtime) VALUES ("Asia", "Korea", 5000000, 100, 400, 40, 6, 600, 0, 200, 234567, "2020-09-11", ${updatedtime});`;
