# No ORM subquery API; using raw SQL
from tortoise import connections

conn = connections.get("default")
rows = await conn.execute_query_dict(
    "SELECT * FROM users "
    "WHERE id IN ("
    "  SELECT user_id FROM orders "
    "  WHERE amount > ("
    "    SELECT AVG(amount) FROM orders"
    "  )"
    ")"
)
