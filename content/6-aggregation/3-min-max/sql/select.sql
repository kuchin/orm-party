SELECT MIN(amount) AS smallest, MAX(amount) AS largest
FROM orders;

-- Per user
SELECT user_id, MIN(amount), MAX(amount)
FROM orders
GROUP BY user_id;
