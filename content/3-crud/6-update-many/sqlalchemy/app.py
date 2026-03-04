with Session(engine) as session:
    session.execute(
        update(User)
        .where(User.name == "Alice")
        .values(name="Alice Smith")
    )
    session.commit()
