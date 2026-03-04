from sqlalchemy import select, func

with Session(engine) as session:
    avg_amount = select(func.avg(Order.amount)).scalar_subquery()

    above_avg_users = select(Order.user_id).where(
        Order.amount > avg_amount
    ).distinct()

    users = session.scalars(
        select(User).where(User.id.in_(above_avg_users))
    ).all()
