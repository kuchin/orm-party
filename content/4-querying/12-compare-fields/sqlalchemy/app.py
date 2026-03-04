from sqlalchemy import select

stmt = select(Product).where(
    Product.sale_price < Product.original_price
)
products = session.execute(stmt).scalars().all()
