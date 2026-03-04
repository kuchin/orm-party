from sqlalchemy.orm import joinedload, selectinload
from sqlmodel import select

with Session(engine) as session:
    # Fetch posts with author and tags
    posts = session.exec(
        select(Post).options(
            joinedload(Post.author),
            selectinload(Post.tags),
        )
    ).all()
    for post in posts:
        print(post.author.name, [t.name for t in post.tags])
