from sqlalchemy import func
from sqlmodel import select

with Session(engine) as session:
    result = session.exec(
        select(
            func.min(Order.amount).label("smallest"),
            func.max(Order.amount).label("largest"),
        )
    ).one()

    # Per user
    per_user = session.exec(
        select(
            Order.user_id,
            func.min(Order.amount).label("smallest"),
            func.max(Order.amount).label("largest"),
        ).group_by(Order.user_id)
    ).all()
