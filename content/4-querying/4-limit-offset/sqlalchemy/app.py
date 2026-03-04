from sqlalchemy import select

with Session(engine) as session:
    users = session.scalars(
        select(User)
        .order_by(User.created_at.desc())
        .limit(10)
        .offset(20)
    ).all()
