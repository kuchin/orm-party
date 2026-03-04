from tortoise.transactions import in_transaction

async with in_transaction() as conn:
    order = await Order.create(
        user_id=1, amount=100, using_db=conn
    )

    try:
        async with in_transaction() as nested:
            await OrderItem.create(
                order_id=order.id,
                product_id=42,
                using_db=nested,
            )
            raise ValueError("item failed")
    except ValueError:
        pass  # only nested transaction rolled back
