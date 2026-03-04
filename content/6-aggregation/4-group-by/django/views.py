from django.db.models import Count, Sum
from django.db.models.functions import TruncMonth

# Orders per month
per_month = (
    Order.objects
    .annotate(month=TruncMonth("created_at"))
    .values("month")
    .annotate(order_count=Count("id"), total=Sum("amount"))
    .order_by("month")
)
