from tortoise.functions import Sum

# Total of all order amounts
total = await Order.annotate(
    total=Sum("amount")
).values("total")

# Total per user
per_user = await Order.annotate(
    total=Sum("amount")
).group_by("user_id").values("user_id", "total")
