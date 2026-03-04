from sqlalchemy import select, func

with Session(engine) as session:
    average = session.scalar(
        select(func.avg(Order.amount))
    )

    # Average per user
    rows = session.execute(
        select(Order.user_id, func.avg(Order.amount).label("average"))
        .group_by(Order.user_id)
    ).all()
