from django.db import transaction
from django.db.models import F

try:
    with transaction.atomic():
        Account.objects.filter(user_id=1).update(
            balance=F("balance") - 100
        )
        Account.objects.filter(user_id=2).update(
            balance=F("balance") + 100
        )
        if error_condition:
            raise ValueError("Transfer failed")
except ValueError:
    pass  # transaction rolled back automatically
