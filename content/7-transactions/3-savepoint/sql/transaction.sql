BEGIN;

INSERT INTO orders (user_id, amount)
  VALUES (1, 100)
  RETURNING id AS order_id;

SAVEPOINT sp1;

INSERT INTO order_items (order_id, product_id)
  VALUES (order_id, 42);

-- rollback only the savepoint
ROLLBACK TO sp1;

COMMIT;
