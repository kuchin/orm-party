from sqlalchemy import update

with Session(engine) as session:
    try:
        session.execute(
            update(Account)
            .where(Account.user_id == 1)
            .values(balance=Account.balance - 100)
        )
        session.execute(
            update(Account)
            .where(Account.user_id == 2)
            .values(balance=Account.balance + 100)
        )
        session.commit()
    except Exception:
        session.rollback()
        raise
