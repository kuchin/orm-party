SELECT u.*, p.id AS post_id, p.title
FROM users u
LEFT JOIN posts p ON p.author_id = u.id
WHERE u.id = 1;
