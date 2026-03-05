-- Store JSON
UPDATE users
SET metadata = '{"theme": "dark"}'
WHERE id = 1;

-- Query JSON field
SELECT * FROM users
WHERE metadata->>'theme' = 'dark';

-- Nested JSON
SELECT metadata->'address'->>'city'
FROM users WHERE id = 1;
