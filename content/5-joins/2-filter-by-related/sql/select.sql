-- Posts by a specific author name
SELECT p.* FROM posts p
JOIN users u ON u.id = p.author_id
WHERE u.name = 'Alice';

-- Users who have at least one post
SELECT DISTINCT u.* FROM users u
JOIN posts p ON p.author_id = u.id;
