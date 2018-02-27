### Schema

CREATE DATABASE burgersapp_db;
USE burgersapp_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
