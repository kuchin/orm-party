# Contains
users = User.select().where(User.name.contains("ali"))

# Starts with
users = User.select().where(User.name.startswith("Ali"))

# Case-insensitive
users = User.select().where(User.name.icontains("ali"))
