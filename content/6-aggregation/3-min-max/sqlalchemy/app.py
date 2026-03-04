from sqlalchemy import select, func

with Session(engine) as session:
    row = session.execute(
        select(
            func.min(Order.amount).label("smallest"),
            func.max(Order.amount).label("largest"),
        )
    ).one()

    # Per user
    rows = session.execute(
        select(
            Order.user_id,
            func.min(Order.amount),
            func.max(Order.amount),
        ).group_by(Order.user_id)
    ).all()
