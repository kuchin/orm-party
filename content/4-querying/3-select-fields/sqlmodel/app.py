from sqlmodel import select

with Session(engine) as session:
    rows = session.exec(
        select(User.name, User.email)
    ).all()
