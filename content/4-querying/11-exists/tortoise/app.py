exists = await User.filter(
    email="alice@example.com"
).exists()
