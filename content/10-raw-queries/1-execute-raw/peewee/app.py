cursor = db.execute_sql(
    "SELECT id, name, email FROM users "
    "WHERE created_at > '2024-01-01'"
)
rows = cursor.fetchall()
