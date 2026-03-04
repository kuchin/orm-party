from tortoise.transactions import in_transaction
from tortoise.expressions import F

try:
    async with in_transaction() as conn:
        await Account.filter(
            user_id=1
        ).using_db(conn).update(
            balance=F("balance") - 100
        )
        await Account.filter(
            user_id=2
        ).using_db(conn).update(
            balance=F("balance") + 100
        )
        if error_condition:
            raise ValueError("Transfer failed")
except ValueError:
    pass  # transaction auto-rolled back
