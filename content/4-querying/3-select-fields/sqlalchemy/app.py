from sqlalchemy import select

with Session(engine) as session:
    rows = session.execute(
        select(User.name, User.email)
    ).all()
