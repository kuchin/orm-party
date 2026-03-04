-- No built-in tracking; use a custom table

SELECT version, name, applied_at
  FROM schema_migrations
  ORDER BY applied_at DESC;

-- version | name           | applied_at
-- 0002    | add_user_age   | 2024-01-15
-- 0001    | initial        | 2024-01-01
