from sqlalchemy import text

with engine.connect() as conn:
    result = conn.execute(
        text(
            "SELECT id, name, email FROM users "
            "WHERE created_at > '2024-01-01'"
        )
    )
    rows = result.fetchall()
