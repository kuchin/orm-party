from sqlalchemy import func
from sqlmodel import select

with Session(engine) as session:
    month = func.date_trunc("month", Order.created_at).label("month")
    per_month = session.exec(
        select(
            month,
            func.count(Order.id).label("order_count"),
            func.sum(Order.amount).label("total"),
        )
        .group_by(month)
        .order_by(month)
    ).all()
