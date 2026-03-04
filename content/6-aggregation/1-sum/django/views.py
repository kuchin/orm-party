from django.db.models import Sum

# Total of all order amounts
total = Order.objects.aggregate(total=Sum("amount"))["total"]

# Total per user
per_user = Order.objects.values("user_id").annotate(total=Sum("amount"))
