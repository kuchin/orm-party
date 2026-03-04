from sqlalchemy import update

with Session(engine) as session:
    session.exec(
        update(User)
        .where(User.id == 1)
        .values(views=User.views + 1)
    )
    session.commit()
