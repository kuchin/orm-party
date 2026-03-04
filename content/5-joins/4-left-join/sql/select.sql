-- All users, even those without posts
SELECT u.name, p.title
FROM users u
LEFT JOIN posts p ON p.author_id = u.id;
