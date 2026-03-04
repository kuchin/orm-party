from peewee import fn

# Total of all order amounts
total = Order.select(fn.SUM(Order.amount)).scalar()

# Total per user
per_user = (
    Order.select(
        Order.user,
        fn.SUM(Order.amount).alias("total"),
    )
    .group_by(Order.user)
)
