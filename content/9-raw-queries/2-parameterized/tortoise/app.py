from tortoise import connections

conn = connections.get("default")
_, rows = await conn.execute_query(
    "SELECT id, name, email FROM users "
    "WHERE age > $1 AND city = $2",
    [25, "NYC"],
)
