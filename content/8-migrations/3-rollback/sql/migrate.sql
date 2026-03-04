-- Write reverse migration manually

-- rollback: 0002_add_user_age.sql
ALTER TABLE users DROP COLUMN age;
