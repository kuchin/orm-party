-- Users whose orders exceed the average amount
SELECT * FROM users
WHERE id IN (
  SELECT user_id FROM orders
  WHERE amount > (SELECT AVG(amount) FROM orders)
);
