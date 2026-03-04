from tortoise.functions import Sum

results = await Order.annotate(
    total=Sum("amount")
).group_by("user_id").filter(
    total__gt=1000
).values("user_id", "total")
