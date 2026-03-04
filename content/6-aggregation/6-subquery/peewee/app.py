from peewee import fn

avg_subquery = Order.select(fn.AVG(Order.amount))

users = User.select().where(
    User.id.in_(
        Order.select(Order.user).where(
            Order.amount > avg_subquery
        )
    )
)
