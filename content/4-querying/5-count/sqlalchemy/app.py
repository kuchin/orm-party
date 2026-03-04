from sqlalchemy import select, func

with Session(engine) as session:
    count = session.scalar(
        select(func.count()).select_from(User).where(User.name == "Alice")
    )
