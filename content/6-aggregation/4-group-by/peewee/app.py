from peewee import fn

month = fn.DATE_TRUNC("month", Order.created_at).alias("month")

# Orders per month
per_month = (
    Order.select(
        month,
        fn.COUNT(Order.id).alias("order_count"),
        fn.SUM(Order.amount).alias("total"),
    )
    .group_by(month)
    .order_by(month)
)
