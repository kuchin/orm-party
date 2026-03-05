# .raw() returns User model instances
users = User.objects.raw(
    "SELECT * FROM users WHERE age > %s",
    [25],
)
for user in users:
    print(user.name)  # User instance
