DROP DATABASE worldcorona;

CREATE DATABASE worldcorona;

CREATE TABLE countries (
country VARCHAR(100),
code VARCHAR(5),
confirmed INTEGER,
recovered INTEGER,
critical INTEGER,
deaths INTEGER,
latitude DECIMAL(8, 6),
longitude DECIMAL(9, 6),
lastChange DATETIME,
lastUpdate DATETIME
);

CREATE TABLE daily (
confirmed INTEGER,
recovered INTEGER,
deaths INTEGER,
active INTEGER,
critical INTEGER,
date DATE
);

