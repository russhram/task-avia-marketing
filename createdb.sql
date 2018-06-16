DROP DATABASE IF EXISTS task_avia_marketing;
CREATE DATABASE task_avia_marketing;

\c task_avia_marketing;
CREATE EXTENSION citext;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  shared BOOLEAN,
  email CITEXT
);