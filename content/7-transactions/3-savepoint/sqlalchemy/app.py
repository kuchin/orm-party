with Session(engine) as session:
    with session.begin():
        order = Order(user_id=1, amount=100)
        session.add(order)
        session.flush()

        nested = session.begin_nested()
        try:
            session.add(
                OrderItem(
                    order_id=order.id, product_id=42
                )
            )
            nested.commit()
        except Exception:
            nested.rollback()
