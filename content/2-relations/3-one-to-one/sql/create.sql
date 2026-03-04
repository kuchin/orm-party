CREATE TABLE users (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE profiles (
    id      SERIAL PRIMARY KEY,
    bio     TEXT NOT NULL,
    user_id INTEGER NOT NULL UNIQUE REFERENCES users(id)
);
