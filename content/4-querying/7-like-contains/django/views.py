# Contains
users = User.objects.filter(name__contains="ali")

# Starts with
users = User.objects.filter(name__startswith="Ali")

# Case-insensitive
users = User.objects.filter(name__icontains="ali")
