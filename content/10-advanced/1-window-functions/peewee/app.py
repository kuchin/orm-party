from peewee import fn

orders = (
    Order.select(
        Order.name,
        Order.amount,
        fn.ROW_NUMBER().over(
            order_by=[Order.amount.desc()]
        ).alias("rank"),
    )
)
