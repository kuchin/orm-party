user = User.objects.get(pk=1)
user.email = "newalice@example.com"
user.save()
