from tortoise.functions import Min, Max

result = await Order.annotate(
    smallest=Min("amount"),
    largest=Max("amount"),
).values("smallest", "largest")

# Per user
per_user = await Order.annotate(
    smallest=Min("amount"),
    largest=Max("amount"),
).group_by("user_id").values(
    "user_id", "smallest", "largest"
)
