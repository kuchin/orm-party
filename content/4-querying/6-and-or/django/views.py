from django.db.models import Q

# AND (implicit)
users = User.objects.filter(name="Alice", email__endswith="@example.com")

# OR
users = User.objects.filter(Q(name="Alice") | Q(name="Bob"))
