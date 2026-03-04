User.objects.filter(email__endswith="@old-domain.com").delete()
