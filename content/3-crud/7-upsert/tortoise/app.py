user, created = await User.update_or_create(
    email="alice@example.com",
    defaults={"name": "Alice Smith"},
)
