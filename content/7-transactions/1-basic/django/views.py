from django.db import transaction
from django.db.models import F

with transaction.atomic():
    user = User.objects.create(
        name="Alice", email="alice@example.com"
    )
    Account.objects.filter(user=user).update(
        balance=F("balance") - 100
    )
