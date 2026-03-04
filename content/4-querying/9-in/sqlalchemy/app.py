from sqlalchemy import select

with Session(engine) as session:
    users = session.scalars(
        select(User).where(User.name.in_(["Alice", "Bob", "Charlie"]))
    ).all()

    # NOT IN
    users = session.scalars(
        select(User).where(User.name.not_in(["Alice", "Bob"]))
    ).all()
