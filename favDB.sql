DROP DATABASE IF EXISTS favorite_db;
CREATE DATABASE favorite_db;

USE favorite_db;

CREATE TABLE favorite_foods (
  food VARCHAR(10) Not NULL,
  score INT
);

CREATE TABLE favorite_songs (
  song VARCHAR(20) Not NULL,
  artist VARCHAR(20),
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  id int Not NULL AUTO_INCREMENT,
  movie VARCHAR(20) NOT NULL,
  five_times BOOLEAN DEFAULT false,
  score INTEGER(10)
  PRIMARY KEY (id)

);
