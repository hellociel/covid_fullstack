var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "worldcorona",
});

connection.connect();

const getCountry = function (name) {
  connection.query(`SELECT * FROM countries WHERE name=${name}`);
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
exports.saveCountries = saveCountries;
// (continent, name, population, newcases, activecases, criticalcases, recoveredcases, totalcases, newdeaths, totaldeaths, totaltests, updatedday, updatedtime)
// `INSERT INTO countries (continent, name, population, newcases, activecases, criticalcases, recoveredcases, totalcases, newdeaths, totaldeaths, totaltests, updatedday, updatedtime) VALUES ("Asia", "Korea", 5000000, 100, 400, 40, 6, 600, 0, 200, 234567, "2020-09-11", ${updatedtime});`;
