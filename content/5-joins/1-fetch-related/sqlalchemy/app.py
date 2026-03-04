from sqlalchemy.orm import selectinload, joinedload
from sqlalchemy import select

with Session(engine) as session:
    # Eager load posts for a user (separate SELECT)
    user = session.scalar(
        select(User)
        .options(selectinload(User.posts))
        .where(User.id == 1)
    )

    # Eager load author for posts (JOIN)
    posts = session.scalars(
        select(Post).options(joinedload(Post.author))
    ).unique().all()
