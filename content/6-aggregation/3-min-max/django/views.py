from django.db.models import Min, Max

result = Order.objects.aggregate(
    smallest=Min("amount"),
    largest=Max("amount"),
)

# Per user
per_user = Order.objects.values("user_id").annotate(
    smallest=Min("amount"),
    largest=Max("amount"),
)
