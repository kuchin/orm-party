-- Greater than
SELECT * FROM users WHERE created_at > '2024-01-01';

-- Less than or equal
SELECT * FROM users WHERE id <= 100;

-- Not equal
SELECT * FROM users WHERE name != 'Alice';

-- Between
SELECT * FROM users
WHERE created_at BETWEEN '2024-01-01' AND '2024-12-31';
