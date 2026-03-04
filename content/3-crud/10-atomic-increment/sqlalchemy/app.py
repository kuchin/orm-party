from sqlalchemy import update

stmt = (
    update(User)
    .where(User.id == 1)
    .values(views=User.views + 1)
)
session.execute(stmt)
session.commit()
