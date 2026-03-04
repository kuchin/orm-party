from django.db.models import Avg

average = Order.objects.aggregate(avg=Avg("amount"))["avg"]

# Average per user
per_user = Order.objects.values("user_id").annotate(avg=Avg("amount"))
