with Session(engine) as session:
    session.add_all([
        User(name="Alice", email="alice@example.com"),
        User(name="Bob", email="bob@example.com"),
        User(name="Charlie", email="charlie@example.com"),
    ])
    session.commit()
