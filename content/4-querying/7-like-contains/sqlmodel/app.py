from sqlmodel import select

with Session(engine) as session:
    # Contains
    users = session.exec(
        select(User).where(User.name.contains("ali"))
    ).all()

    # Starts with
    users = session.exec(
        select(User).where(User.name.startswith("Ali"))
    ).all()

    # Case-insensitive
    users = session.exec(
        select(User).where(User.name.ilike("%ali%"))
    ).all()
