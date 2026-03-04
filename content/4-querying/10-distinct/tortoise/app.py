names = await User.all().values_list(
    "name", flat=True
).distinct()
