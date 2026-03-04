-- Users who spent more than 1000 total
SELECT user_id, SUM(amount) AS total
FROM orders
GROUP BY user_id
HAVING SUM(amount) > 1000;
