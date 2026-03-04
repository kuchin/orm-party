SELECT EXISTS (
  SELECT 1 FROM users
  WHERE email = 'alice@example.com'
);
