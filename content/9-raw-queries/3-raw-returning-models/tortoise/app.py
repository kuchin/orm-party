# .raw() returns model instances
users = await User.raw(
    "SELECT * FROM users WHERE age > 25"
)
for user in users:
    print(user.name)  # User instance
