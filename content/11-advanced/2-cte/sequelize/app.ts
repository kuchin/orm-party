// No high-level CTE API; use raw SQL
const [rows] = await sequelize.query(`
  WITH high_value AS (
    SELECT user_id, SUM(amount) AS total
    FROM orders
    GROUP BY user_id
    HAVING SUM(amount) > 1000
  )
  SELECT u.name, h.total
  FROM users u
  JOIN high_value h ON u.id = h.user_id
`);
