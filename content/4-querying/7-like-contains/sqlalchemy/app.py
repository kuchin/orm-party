from sqlalchemy import select

with Session(engine) as session:
    # Contains
    users = session.scalars(
        select(User).where(User.name.contains("ali"))
    ).all()

    # Starts with
    users = session.scalars(
        select(User).where(User.name.startswith("Ali"))
    ).all()

    # Case-insensitive
    users = session.scalars(
        select(User).where(User.name.ilike("%ali%"))
    ).all()
