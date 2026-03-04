from sqlalchemy import select, func

with Session(engine) as session:
    # Total of all order amounts
    total = session.scalar(
        select(func.sum(Order.amount))
    )

    # Total per user
    rows = session.execute(
        select(Order.user_id, func.sum(Order.amount).label("total"))
        .group_by(Order.user_id)
    ).all()
