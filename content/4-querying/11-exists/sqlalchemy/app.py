from sqlalchemy import exists, select

stmt = select(
    exists().where(
        User.email == "alice@example.com"
    )
)
result = session.execute(stmt).scalar()
