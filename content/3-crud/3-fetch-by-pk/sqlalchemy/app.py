with Session(engine) as session:
    user = session.get(User, 1)
