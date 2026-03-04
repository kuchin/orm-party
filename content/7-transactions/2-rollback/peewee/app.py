try:
    with db.atomic():
        Account.update(
            balance=Account.balance - 100
        ).where(Account.user == 1).execute()

        Account.update(
            balance=Account.balance + 100
        ).where(Account.user == 2).execute()

        if error_condition:
            raise ValueError("Transfer failed")
except ValueError:
    pass  # transaction rolled back automatically
