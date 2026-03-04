from sqlalchemy import select, func

with Session(engine) as session:
    rows = session.execute(
        select(Order.user_id, func.sum(Order.amount).label("total"))
        .group_by(Order.user_id)
        .having(func.sum(Order.amount) > 1000)
    ).all()
