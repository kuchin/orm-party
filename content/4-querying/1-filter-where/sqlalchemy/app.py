from sqlalchemy import select

with Session(engine) as session:
    users = session.scalars(
        select(User).where(User.name == "Alice")
    ).all()
