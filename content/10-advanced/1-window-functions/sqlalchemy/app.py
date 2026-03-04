from sqlalchemy import func, select

stmt = select(
    Order.name,
    Order.amount,
    func.row_number()
    .over(order_by=Order.amount.desc())
    .label("rank"),
)
rows = session.execute(stmt).all()
