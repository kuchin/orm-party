from sqlalchemy import func
from sqlmodel import select

with Session(engine) as session:
    count = session.exec(
        select(func.count())
        .select_from(User)
        .where(User.name == "Alice")
    ).one()
