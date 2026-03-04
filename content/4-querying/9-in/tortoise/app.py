users = await User.filter(
    name__in=["Alice", "Bob", "Charlie"]
)

# NOT IN
users = await User.exclude(
    name__in=["Alice", "Bob"]
)
