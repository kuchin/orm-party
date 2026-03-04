from sqlalchemy import select, func

with Session(engine) as session:
    month = func.date_trunc("month", Order.created_at).label("month")
    rows = session.execute(
        select(
            month,
            func.count().label("order_count"),
            func.sum(Order.amount).label("total"),
        )
        .group_by(month)
        .order_by(month)
    ).all()
