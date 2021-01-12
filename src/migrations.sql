CREATE TYPE gender AS ENUM ('m', 'f', 'other');

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  uid VARCHAR(64) NOT NULL UNIQUE,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(75) NOT NULL UNIQUE,
  password VARCHAR(150) NOT NULL,
  gender gender,
  created_dt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified_dt TIMESTAMP DEFAULT NULL
);

CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.modified_dt = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_modifed_dt
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE
  PROCEDURE update_modified_column();
