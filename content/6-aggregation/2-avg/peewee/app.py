from peewee import fn

average = Order.select(fn.AVG(Order.amount)).scalar()

# Average per user
per_user = (
    Order.select(
        Order.user,
        fn.AVG(Order.amount).alias("avg"),
    )
    .group_by(Order.user)
)
