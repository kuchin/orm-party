with Session(engine) as session:
    user = session.get(User, 1)
    user.email = "newalice@example.com"
    session.add(user)
    session.commit()
