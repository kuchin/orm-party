from sqlmodel import select

with Session(engine) as session:
    users = session.exec(
        select(User).where(User.name == "Alice")
    ).all()
