users = User.select().where(
    User.name << ["Alice", "Bob", "Charlie"]
)

# NOT IN
users = User.select().where(
    User.name.not_in(["Alice", "Bob"])
)
