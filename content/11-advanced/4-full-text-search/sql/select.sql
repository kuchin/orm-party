SELECT * FROM articles
WHERE to_tsvector('english', title || ' ' || body)
  @@ plainto_tsquery('english', 'database optimization');
