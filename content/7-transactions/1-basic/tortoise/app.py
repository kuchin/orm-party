from tortoise.transactions import in_transaction
from tortoise.expressions import F

async with in_transaction() as conn:
    user = await User.create(
        name="Alice",
        email="alice@example.com",
        using_db=conn,
    )
    await Account.filter(
        user=user
    ).using_db(conn).update(
        balance=F("balance") - 100
    )
