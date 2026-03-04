from sqlalchemy import func
from sqlmodel import select

with Session(engine) as session:
    avg_subquery = select(func.avg(Order.amount)).scalar_subquery()

    users = session.exec(
        select(User).where(
            User.id.in_(
                select(Order.user_id)
                .where(Order.amount > avg_subquery)
            )
        )
    ).all()
