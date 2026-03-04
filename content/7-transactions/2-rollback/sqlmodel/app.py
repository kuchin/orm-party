from sqlalchemy import update

with Session(engine) as session:
    try:
        session.exec(
            update(Account)
            .where(Account.user_id == 1)
            .values(balance=Account.balance - 100)
        )
        session.exec(
            update(Account)
            .where(Account.user_id == 2)
            .values(balance=Account.balance + 100)
        )
        if error_condition:
            raise ValueError("Transfer failed")
        session.commit()
    except ValueError:
        session.rollback()
