# No TruncMonth API; use raw SQL
from tortoise import connections

conn = connections.get("default")
rows = await conn.execute_query_dict(
    "SELECT DATE_TRUNC('month', created_at) "
    "  AS month, "
    "COUNT(*) AS order_count, "
    "SUM(amount) AS total "
    "FROM orders "
    "GROUP BY month ORDER BY month"
)
