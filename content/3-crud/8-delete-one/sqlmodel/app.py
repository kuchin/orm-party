with Session(engine) as session:
    user = session.get(User, 1)
    session.delete(user)
    session.commit()
