cursor = db.execute_sql(
    "SELECT id, name, email FROM users "
    "WHERE age > %s AND city = %s",
    (25, "NYC"),
)
rows = cursor.fetchall()
