-- Count posts per author
SELECT u.name, COUNT(p.id) AS post_count
FROM users u
LEFT JOIN posts p ON p.author_id = u.id
GROUP BY u.id, u.name
ORDER BY post_count DESC;
