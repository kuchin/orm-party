CREATE TABLE products (
    id           SERIAL PRIMARY KEY,
    name         VARCHAR(255) NOT NULL,
    description  TEXT NOT NULL,
    price        DOUBLE PRECISION NOT NULL,
    quantity     INTEGER NOT NULL,
    in_stock     BOOLEAN NOT NULL,
    release_date TIMESTAMP NOT NULL,
    tags         JSONB NOT NULL
);
