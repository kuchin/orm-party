from django.db.models import Sum

users = (
    Order.objects
    .values("user_id")
    .annotate(total=Sum("amount"))
    .filter(total__gt=1000)
)
