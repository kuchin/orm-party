from sqlmodel import select

with Session(engine) as session:
    users = session.exec(
        select(User).order_by(User.created_at.desc())
    ).all()
