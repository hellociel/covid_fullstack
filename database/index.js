const { response } = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "meow",
  database: "covid_tracker",
});

connection.connect();

const getCountry = function (req, res) {
  let name = req.query.country;
  console.log("NAME", name);
  connection.query(
    `SELECT * FROM countries JOIN coordinates ON countries.name = coordinates.name WHERE countries.name="${name}";`,
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
    `SELECT * FROM countries ORDER BY totalcases DESC LIMIT 30;`,
    (err, data) => {
      console.log("result from db", data[0]);
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data);
    }
  );
};

const getDeceased = function (req, res) {
  console.log("GOT TO GETDECEASED");
  connection.query(
    `SELECT * FROM countries ORDER BY totaldeaths DESC LIMIT 30;`,
    (err, data) => {
      console.log("result from db", data[0]);
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data);
    }
  );
};

const getTested = function (req, res) {
  let name = req.query.country;
  connection.query(
    `SELECT * FROM countries ORDER BY totaltests DESC LIMIT 30;`,
    (err, data) => {
      console.log("result from db", data);
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data[0]);
    }
  );
};
const getAll = function (req, res) {
  connection.query(
    `SELECT name, continent, population, totalcases FROM countries ORDER BY continent;`,
    (err, data) => {
      console.log("DBHITTING esult from db", data[0]);
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data);
    }
  );
};

const getByContinent = function (req, res) {
  let name = req.query.continent;

  connection.query(
    `SELECT * FROM countries WHERE continent="${name}" ORDER BY (totalcases);`,
    (err, data) => {
      console.log("result from db", data[0]);
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data);
    }
  );
};

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

    connection.query(
      `INSERT INTO countries (continent, name, population, newcases, activecases, criticalcases, recoveredcases, totalcases, newdeaths, totaldeaths, totaltests, updatedday, updatedtime) VALUES ("${continent}", "${name}", ${population}, "${newcases}", ${activecases}, ${criticalcases}, ${recoveredcases}, ${totalcases}, ${newdeaths}, ${totaldeaths}, ${totaltests}, "${updatedday}", "${updatedtime}");`
    );
  }
};

exports.getCountry = getCountry;
exports.getGlobal = getGlobal;
exports.saveCountries = saveCountries;
exports.getCases = getCases;
exports.getDeceased = getDeceased;
exports.getTested = getTested;
exports.getByContinent = getByContinent;
exports.getAll = getAll;
// (continent, name, population, newcases, activecases, criticalcases, recoveredcases, totalcases, newdeaths, totaldeaths, totaltests, updatedday, updatedtime)
// `INSERT INTO countries (continent, name, population, newcases, activecases, criticalcases, recoveredcases, totalcases, newdeaths, totaldeaths, totaltests, updatedday, updatedtime) VALUES ("Asia", "Korea", 5000000, 100, 400, 40, 6, 600, 0, 200, 234567, "2020-09-11", ${updatedtime});`;
