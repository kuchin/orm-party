-- Orders per month
SELECT
  DATE_TRUNC('month', created_at) AS month,
  COUNT(*) AS order_count,
  SUM(amount) AS total
FROM orders
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month;
