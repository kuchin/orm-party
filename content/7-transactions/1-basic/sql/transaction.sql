BEGIN;

INSERT INTO users (name, email)
  VALUES ('Alice', 'alice@example.com');

UPDATE accounts SET balance = balance - 100
  WHERE user_id = 1;

COMMIT;
