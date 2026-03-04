from sqlalchemy import select

with Session(engine) as session:
    names = session.scalars(
        select(User.name).distinct()
    ).all()
