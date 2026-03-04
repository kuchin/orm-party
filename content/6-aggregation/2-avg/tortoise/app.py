from tortoise.functions import Avg

avg = await Order.annotate(
    avg=Avg("amount")
).values("avg")

# Average per user
per_user = await Order.annotate(
    avg=Avg("amount")
).group_by("user_id").values("user_id", "avg")
