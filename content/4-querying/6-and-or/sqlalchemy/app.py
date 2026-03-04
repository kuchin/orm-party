from sqlalchemy import select, and_, or_

with Session(engine) as session:
    # AND
    users = session.scalars(
        select(User).where(
            and_(User.name == "Alice", User.email.like("%@example.com"))
        )
    ).all()

    # OR
    users = session.scalars(
        select(User).where(
            or_(User.name == "Alice", User.name == "Bob")
        )
    ).all()
