from sqlalchemy import func
from sqlmodel import select

with Session(engine) as session:
    average = session.exec(
        select(func.avg(Order.amount))
    ).one()

    # Average per user
    per_user = session.exec(
        select(Order.user_id, func.avg(Order.amount).label("avg"))
        .group_by(Order.user_id)
    ).all()
