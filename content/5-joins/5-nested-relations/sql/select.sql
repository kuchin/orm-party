-- Posts with author and tags (two joins)
SELECT p.title, u.name AS author, t.name AS tag
FROM posts p
JOIN users u ON u.id = p.author_id
LEFT JOIN post_tags pt ON pt.post_id = p.id
LEFT JOIN tags t ON t.id = pt.tag_id;
