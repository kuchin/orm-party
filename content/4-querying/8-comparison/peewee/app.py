from datetime import date

# Greater than
users = User.select().where(User.created_at > date(2024, 1, 1))

# Less than or equal
users = User.select().where(User.id <= 100)

# Not equal
users = User.select().where(User.name != "Alice")

# Between
users = User.select().where(
    User.created_at.between(date(2024, 1, 1), date(2024, 12, 31))
)
