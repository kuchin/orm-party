SELECT AVG(amount) AS average FROM orders;

-- Average per user
SELECT user_id, AVG(amount) AS average
FROM orders
GROUP BY user_id;
