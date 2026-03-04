with Session(engine) as session:
    session.execute(
        delete(User).where(User.email.like("%@old-domain.com"))
    )
    session.commit()
