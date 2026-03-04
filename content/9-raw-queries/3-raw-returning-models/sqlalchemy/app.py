from sqlalchemy import select, text

with Session(engine) as session:
    users = session.execute(
        select(User).from_statement(
            text("SELECT * FROM users "
                 "WHERE age > :age")
        ),
        {"age": 25},
    ).scalars().all()
    # Returns User model instances
