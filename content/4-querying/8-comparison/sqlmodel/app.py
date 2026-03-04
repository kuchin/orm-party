from datetime import date
from sqlmodel import select

with Session(engine) as session:
    # Greater than
    users = session.exec(
        select(User).where(User.created_at > date(2024, 1, 1))
    ).all()

    # Less than or equal
    users = session.exec(
        select(User).where(User.id <= 100)
    ).all()

    # Not equal
    users = session.exec(
        select(User).where(User.name != "Alice")
    ).all()

    # Between
    users = session.exec(
        select(User).where(
            User.created_at.between(date(2024, 1, 1), date(2024, 12, 31))
        )
    ).all()
