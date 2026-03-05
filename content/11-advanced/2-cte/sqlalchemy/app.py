from sqlalchemy import func, select

high_value = (
    select(
        Order.user_id,
        func.sum(Order.amount).label("total"),
    )
    .group_by(Order.user_id)
    .having(func.sum(Order.amount) > 1000)
    .cte("high_value")
)

stmt = select(
    User.name, high_value.c.total
).join(
    high_value,
    User.id == high_value.c.user_id,
)
rows = session.execute(stmt).all()
