# Contains
users = await User.filter(name__contains="ali")

# Starts with
users = await User.filter(name__startswith="Ali")

# Case-insensitive
users = await User.filter(name__icontains="ali")
