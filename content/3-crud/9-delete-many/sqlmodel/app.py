from sqlalchemy import delete

with Session(engine) as session:
    session.exec(
        delete(User).where(User.email.endswith("@old-domain.com"))
    )
    session.commit()
