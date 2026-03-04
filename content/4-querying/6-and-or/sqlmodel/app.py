from sqlalchemy import and_, or_
from sqlmodel import select

with Session(engine) as session:
    # AND
    users = session.exec(
        select(User).where(
            and_(User.name == "Alice", User.email.endswith("@example.com"))
        )
    ).all()

    # OR
    users = session.exec(
        select(User).where(
            or_(User.name == "Alice", User.name == "Bob")
        )
    ).all()
