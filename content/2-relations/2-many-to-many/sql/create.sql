CREATE TABLE posts (
    id    SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE tags (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE post_tags (
    post_id INTEGER NOT NULL REFERENCES posts(id),
    tag_id  INTEGER NOT NULL REFERENCES tags(id),
    PRIMARY KEY (post_id, tag_id)
);
