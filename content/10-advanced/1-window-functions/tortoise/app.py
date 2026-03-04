# No window function API; use raw SQL
from tortoise import connections

conn = connections.get("default")
rows = await conn.execute_query_dict(
    "SELECT name, amount, "
    "ROW_NUMBER() OVER ("
    "  ORDER BY amount DESC"
    ") AS rank "
    "FROM orders"
)
