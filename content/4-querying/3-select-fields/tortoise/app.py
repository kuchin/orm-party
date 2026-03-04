users = await User.all().values("name", "email")
