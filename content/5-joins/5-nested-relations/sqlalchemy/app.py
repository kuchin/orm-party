from sqlalchemy.orm import selectinload, joinedload
from sqlalchemy import select

with Session(engine) as session:
    posts = session.scalars(
        select(Post)
        .options(
            joinedload(Post.author),
            selectinload(Post.tags),
        )
    ).unique().all()
