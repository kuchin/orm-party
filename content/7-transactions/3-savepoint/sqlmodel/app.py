with Session(engine) as session:
    with session.begin():
        order = Order(user_id=1, amount=100)
        session.add(order)
        session.flush()

        try:
            with session.begin_nested():
                session.add(
                    OrderItem(
                        order_id=order.id,
                        product_id=42,
                    )
                )
                raise ValueError("item failed")
        except ValueError:
            pass  # only nested transaction rolled back
