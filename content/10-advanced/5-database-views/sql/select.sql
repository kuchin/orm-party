CREATE VIEW active_users AS
SELECT id, name, email
FROM users
WHERE is_active = true;

SELECT * FROM active_users
WHERE name LIKE 'A%';
