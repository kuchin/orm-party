from peewee import fn

users = (
    Order.select(
        Order.user,
        fn.SUM(Order.amount).alias("total"),
    )
    .group_by(Order.user)
    .having(fn.SUM(Order.amount) > 1000)
)
