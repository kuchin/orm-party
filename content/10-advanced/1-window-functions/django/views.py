from django.db.models import F, Window
from django.db.models.functions import RowNumber

orders = Order.objects.annotate(
    rank=Window(
        expression=RowNumber(),
        order_by=F("amount").desc(),
    )
).values("name", "amount", "rank")
