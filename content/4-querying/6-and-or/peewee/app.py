# AND
users = User.select().where(
    (User.name == "Alice") &
    (User.email.endswith("@example.com"))
)

# OR
users = User.select().where(
    (User.name == "Alice") |
    (User.name == "Bob")
)
