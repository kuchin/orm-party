exists = User.objects.filter(
    email="alice@example.com"
).exists()
