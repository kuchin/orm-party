-- No migration tool; write SQL manually

ALTER TABLE users
  ADD COLUMN age INTEGER;
