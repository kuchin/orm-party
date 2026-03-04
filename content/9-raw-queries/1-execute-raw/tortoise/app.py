from tortoise import connections

conn = connections.get("default")
rows = await conn.execute_query_dict(
    "SELECT id, name, email FROM users "
    "WHERE created_at > '2024-01-01'"
)
