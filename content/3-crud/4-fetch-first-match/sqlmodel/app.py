from sqlmodel import select

with Session(engine) as session:
    user = session.exec(
        select(User).where(User.name == "Alice")
    ).first()
