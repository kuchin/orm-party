await User.filter(
    email__endswith="@old-domain.com"
).delete()
