from sqlalchemy.orm import joinedload, selectinload
from sqlmodel import select

with Session(engine) as session:
    # Prefetch related posts for a user
    user = session.exec(
        select(User)
        .options(selectinload(User.posts))
        .where(User.id == 1)
    ).one()
    for post in user.posts:
        print(post.title)

    # Select related author for posts (ForeignKey)
    posts = session.exec(
        select(Post).options(joinedload(Post.author))
    ).all()
