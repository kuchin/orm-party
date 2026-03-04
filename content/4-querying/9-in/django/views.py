users = User.objects.filter(name__in=["Alice", "Bob", "Charlie"])

# NOT IN
users = User.objects.exclude(name__in=["Alice", "Bob"])
