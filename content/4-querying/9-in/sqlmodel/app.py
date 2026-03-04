from sqlmodel import select

with Session(engine) as session:
    users = session.exec(
        select(User).where(User.name.in_(["Alice", "Bob", "Charlie"]))
    ).all()

    # NOT IN
    users = session.exec(
        select(User).where(~User.name.in_(["Alice", "Bob"]))
    ).all()
