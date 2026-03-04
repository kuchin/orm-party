CREATE TABLE employees (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    manager_id INTEGER REFERENCES employees(id)
);
