-- Total of all order amounts
SELECT SUM(amount) AS total FROM orders;

-- Total per user
SELECT user_id, SUM(amount) AS total
FROM orders
GROUP BY user_id;
