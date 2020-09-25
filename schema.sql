DROP DATABASE worldcorona;

CREATE DATABASE worldcorona;

-- CREATE TABLE countries (
-- country VARCHAR(100),
-- code VARCHAR(5),
-- confirmed INTEGER,
-- recovered INTEGER,
-- critical INTEGER,
-- deaths INTEGER,
-- latitude DECIMAL(8, 6),
-- longitude DECIMAL(9, 6),
-- lastChange DATETIME,
-- lastUpdate DATETIME
-- );

-- CREATE TABLE daily (
-- confirmed INTEGER,
-- recovered INTEGER,
-- deaths INTEGER,
-- active INTEGER,
-- critical INTEGER,
-- date DATE
-- );




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
-- continent: 'North-America',
--     country: 'Trinidad-and-Tobago',
--     population: 1400419,
--     cases: {
--       new: '+49',
--       active: 2250,
--       critical: 13,
--       recovered: 787,
--       '1M_pop': '2207',
--       total: 3091
--     },
--     deaths: { new: '+1', '1M_pop': '39', total: 54 },
--     tests: { '1M_pop': '19284', total: 27006 },
--     day: '2020-09-14',
--     time: '2020-09-14T22:00:07+00:00'


LOAD DATA LOCAL INFILE '/Users/ciel/Desktop/mvp-worldcovidstatus/client/src/csv/coordinates.csv' INTO TABLE coordinates FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (name, latitude, longitude);