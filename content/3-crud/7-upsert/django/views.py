user, created = User.objects.update_or_create(
    email="alice@example.com",
    defaults={"name": "Alice Smith"},
)
