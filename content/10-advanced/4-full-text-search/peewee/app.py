# Use raw SQL for PostgreSQL full-text search
results = Article.raw(
    "SELECT * FROM articles "
    "WHERE to_tsvector('english', title || ' ' || body) "
    "@@ plainto_tsquery('english', %s)",
    "database optimization",
)
