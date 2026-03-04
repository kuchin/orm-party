-- Users with more than 5 posts
SELECT u.name, COUNT(p.id) AS post_count
FROM users u
JOIN posts p ON p.author_id = u.id
GROUP BY u.id, u.name
HAVING COUNT(p.id) > 5;
