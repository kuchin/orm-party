User.update(name="Alice Smith").where(
    User.name == "Alice"
).execute()
