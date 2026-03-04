from sqlalchemy import func
from sqlmodel import select

stmt = select(
    Order.name,
    Order.amount,
    func.row_number()
    .over(order_by=Order.amount.desc())
    .label("rank"),
)
rows = session.exec(stmt).all()
