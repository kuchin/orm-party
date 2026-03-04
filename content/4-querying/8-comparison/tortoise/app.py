from datetime import date

# Greater than
users = await User.filter(
    created_at__gt=date(2024, 1, 1)
)

# Less than or equal
users = await User.filter(id__lte=100)

# Not equal
users = await User.exclude(name="Alice")

# Between
users = await User.filter(
    created_at__range=(
        date(2024, 1, 1), date(2024, 12, 31)
    )
)
