from sqlalchemy import update

with Session(engine) as session:
    with session.begin():
        user = User(name="Alice", email="alice@example.com")
        session.add(user)
        session.flush()
        session.execute(
            update(Account)
            .where(Account.user_id == user.id)
            .values(balance=Account.balance - 100)
        )
