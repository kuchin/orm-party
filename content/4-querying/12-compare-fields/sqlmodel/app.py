from sqlmodel import select

with Session(engine) as session:
    products = session.exec(
        select(Product).where(
            Product.sale_price < Product.original_price
        )
    ).all()
