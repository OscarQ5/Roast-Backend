DROP DATABASE IF EXISTS coffees_dev;
CREATE DATABASE coffees_dev;

\c coffees_dev;

CREATE TABLE coffees (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 is_favorite BOOLEAN
);