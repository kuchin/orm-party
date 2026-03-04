User.insert(
    name="Alice Smith",
    email="alice@example.com",
).on_conflict(
    conflict_target=[User.email],
    update={User.name: "Alice Smith"},
).execute()
