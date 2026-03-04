from sqlalchemy import func
from sqlmodel import select

with Session(engine) as session:
    users = session.exec(
        select(Order.user_id, func.sum(Order.amount).label("total"))
        .group_by(Order.user_id)
        .having(func.sum(Order.amount) > 1000)
    ).all()
