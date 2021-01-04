--create database
CREATE DATABASE todos;
--use database
USE todos;
--create table
--add columns to table
CREATE TABLE todo_list (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(255) NULL DEFAULT NULL,
  progress BOOLEAN NULL DEFAULT NULL
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < database.sql
 *  to create the database and the tables.*/