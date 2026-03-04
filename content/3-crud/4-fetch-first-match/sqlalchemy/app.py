with Session(engine) as session:
    user = session.execute(
        select(User).where(User.name == "Alice")
    ).scalars().first()
