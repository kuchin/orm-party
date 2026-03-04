from peewee import fn

result = Order.select(
    fn.MIN(Order.amount).alias("smallest"),
    fn.MAX(Order.amount).alias("largest"),
).dicts().get()

# Per user
per_user = (
    Order.select(
        Order.user,
        fn.MIN(Order.amount).alias("smallest"),
        fn.MAX(Order.amount).alias("largest"),
    )
    .group_by(Order.user)
)
