# No CTE API; use raw SQL
from tortoise import connections

conn = connections.get("default")
rows = await conn.execute_query_dict("""
    WITH high_value AS (
        SELECT user_id,
               SUM(amount) AS total
        FROM orders
        GROUP BY user_id
        HAVING SUM(amount) > 1000
    )
    SELECT u.name, h.total
    FROM users u
    JOIN high_value h
      ON u.id = h.user_id
""")
