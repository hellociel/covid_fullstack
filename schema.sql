DROP DATABASE IF EXISTS covid_tracker;

CREATE DATABASE covid_tracker;

CREATE TABLE countries (
    id INT AUTO_INCREMENT,
    continent VARCHAR(30),
    name VARCHAR(30),
    population INT,
    newcases VARCHAR(100),
    activecases INT,
    criticalcases INT,
    recoveredcases INT,
    totalcases INT,
    newdeaths INT,
    totaldeaths INT,
    totaltests INT,
    updatedday DATE,
    updatedtime DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE coordinates (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    latitude float,
    longitude float,
    PRIMARY KEY(id)
);


LOAD DATA LOCAL INFILE '/Users/ciel/Desktop/covid_fullstack/client/src/csv/coordinates.csv' INTO TABLE coordinates FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (name, latitude, longitude);