SELECT u.name, p.title
FROM users u
INNER JOIN posts p ON p.author_id = u.id;
