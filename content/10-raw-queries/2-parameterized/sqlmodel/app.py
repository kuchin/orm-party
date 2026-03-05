from sqlalchemy import text

with engine.connect() as conn:
    result = conn.execute(
        text(
            "SELECT id, name, email FROM users "
            "WHERE age > :age AND city = :city"
        ),
        {"age": 25, "city": "NYC"},
    )
    rows = result.fetchall()
