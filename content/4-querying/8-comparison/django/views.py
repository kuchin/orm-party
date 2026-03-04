from datetime import date

# Greater than
users = User.objects.filter(created_at__gt=date(2024, 1, 1))

# Less than or equal
users = User.objects.filter(id__lte=100)

# Not equal
users = User.objects.exclude(name="Alice")

# Between
users = User.objects.filter(
    created_at__range=(date(2024, 1, 1), date(2024, 12, 31))
)
