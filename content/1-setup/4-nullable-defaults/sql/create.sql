CREATE TABLE posts (
    id           SERIAL PRIMARY KEY,
    title        VARCHAR(255) NOT NULL,
    content      TEXT,
    views        INTEGER NOT NULL DEFAULT 0,
    is_published BOOLEAN NOT NULL DEFAULT false,
    published_at TIMESTAMP,
    created_at   TIMESTAMP NOT NULL DEFAULT now()
);
