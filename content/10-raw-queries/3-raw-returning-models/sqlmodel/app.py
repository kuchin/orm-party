from sqlalchemy import text
from sqlmodel import select

with Session(engine) as session:
    users = session.exec(
        select(User).from_statement(
            text("SELECT * FROM users WHERE age > :age")
        ).params(age=25)
    ).all()
    # Returns User model instances
