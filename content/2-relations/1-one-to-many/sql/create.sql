CREATE TABLE users (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
    id        SERIAL PRIMARY KEY,
    title     VARCHAR(255) NOT NULL,
    author_id INTEGER NOT NULL REFERENCES users(id)
);
