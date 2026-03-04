from django.db.models import Avg, Subquery

avg_sub = Order.objects.values(
    avg=Avg("amount")
)

users = User.objects.filter(
    id__in=Subquery(
        Order.objects.filter(
            amount__gt=Subquery(avg_sub[:1])
        ).values("user_id")
    )
)
