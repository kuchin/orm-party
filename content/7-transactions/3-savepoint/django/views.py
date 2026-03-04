from django.db import transaction

with transaction.atomic():
    order = Order.objects.create(
        user_id=1, amount=100
    )

    try:
        with transaction.atomic():
            OrderItem.objects.create(
                order_id=order.id, product_id=42
            )
            raise ValueError("item failed")
    except ValueError:
        pass  # only inner transaction rolled back
