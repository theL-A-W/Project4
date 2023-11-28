-- settings.sql
CREATE DATABASE trenz;
CREATE USER trenzuser WITH PASSWORD 'trenz';
GRANT ALL PRIVILEGES ON DATABASE trenz TO trenzuser;