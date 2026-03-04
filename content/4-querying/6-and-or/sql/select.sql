-- AND
SELECT * FROM users
WHERE name = 'Alice' AND email LIKE '%@example.com';

-- OR
SELECT * FROM users
WHERE name = 'Alice' OR name = 'Bob';
