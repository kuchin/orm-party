-- PostgreSQL positional parameters
SELECT id, name, email
FROM users
WHERE age > $1 AND city = $2;
-- e.g. [25, 'NYC']
