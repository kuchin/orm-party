with Session(engine) as session:
    user = User(name="Alice", email="alice@example.com")
    session.add(user)
    session.commit()
