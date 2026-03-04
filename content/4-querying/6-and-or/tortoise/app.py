from tortoise.queryset import Q

# AND (implicit)
users = await User.filter(
    name="Alice", email__endswith="@example.com"
)

# OR
users = await User.filter(
    Q(name="Alice") | Q(name="Bob")
)
