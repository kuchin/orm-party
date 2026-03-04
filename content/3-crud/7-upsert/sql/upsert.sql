INSERT INTO users (name, email)
VALUES ('Alice Smith', 'alice@example.com')
ON CONFLICT (email)
DO UPDATE SET name = EXCLUDED.name;
