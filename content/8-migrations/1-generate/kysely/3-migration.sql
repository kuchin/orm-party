-- migrations/20240115_add_user_age.ts (up)
ALTER TABLE users
  ADD COLUMN age INTEGER;

-- down
ALTER TABLE users
  DROP COLUMN age;
