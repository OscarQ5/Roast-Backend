DROP DATABASE IF EXISTS coffees_dev;
CREATE DATABASE coffees_dev;

\c coffees_dev;

CREATE TABLE coffees (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 origin TEXT NOT NULL,
 roast TEXT NOT NULL,
 note TEXT,
 grind TEXT,
 price INT,
 is_favorite BOOLEAN
);