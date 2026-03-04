from sqlalchemy import update

with Session(engine) as session:
    session.exec(
        update(User)
        .where(User.name == "Alice")
        .values(name="Alice Smith")
    )
    session.commit()
