exists = User.select().where(
    User.email == "alice@example.com"
).exists()
