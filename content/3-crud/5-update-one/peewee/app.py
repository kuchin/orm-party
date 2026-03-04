user = User.get_by_id(1)
user.email = "newalice@example.com"
user.save()
