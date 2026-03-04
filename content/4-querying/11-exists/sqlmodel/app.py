from sqlalchemy import exists
from sqlmodel import select

stmt = select(
    exists().where(
        User.email == "alice@example.com"
    )
)

with Session(engine) as session:
    exists_result = session.exec(stmt).one()
