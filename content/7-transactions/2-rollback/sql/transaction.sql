BEGIN;

UPDATE accounts SET balance = balance - 100
  WHERE user_id = 1;
UPDATE accounts SET balance = balance + 100
  WHERE user_id = 2;

-- on error:
ROLLBACK;
-- on success:
COMMIT;
