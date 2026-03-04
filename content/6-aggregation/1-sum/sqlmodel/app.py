from sqlalchemy import func
from sqlmodel import select

with Session(engine) as session:
    # Total of all order amounts
    total = session.exec(
        select(func.sum(Order.amount))
    ).one()

    # Total per user
    per_user = session.exec(
        select(Order.user_id, func.sum(Order.amount).label("total"))
        .group_by(Order.user_id)
    ).all()
