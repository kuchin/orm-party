-- Contains
SELECT * FROM users WHERE name LIKE '%ali%';

-- Starts with
SELECT * FROM users WHERE name LIKE 'Ali%';

-- Case-insensitive
SELECT * FROM users WHERE name ILIKE '%ali%';
