user = await User.get(id=1)
user.email = "newalice@example.com"
await user.save()
