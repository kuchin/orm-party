with db.atomic():
    user = User.create(
        name="Alice",
        email="alice@example.com",
    )
    Account.update(
        balance=Account.balance - 100
    ).where(Account.user == user).execute()
