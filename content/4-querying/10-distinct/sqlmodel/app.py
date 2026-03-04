from sqlmodel import select

with Session(engine) as session:
    names = session.exec(
        select(User.name).distinct()
    ).all()
