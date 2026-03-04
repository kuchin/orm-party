with db.atomic():
    order = Order.create(
        user=1,
        amount=100,
    )

    try:
        with db.atomic():
            OrderItem.create(
                order=order,
                product=42,
            )
            raise ValueError("item failed")
    except ValueError:
        pass  # only inner transaction rolled back
