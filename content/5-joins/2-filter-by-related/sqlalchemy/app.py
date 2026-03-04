from sqlalchemy import select

with Session(engine) as session:
    # Posts by author name
    posts = session.scalars(
        select(Post).join(Post.author).where(User.name == "Alice")
    ).all()

    # Users who have at least one post
    users = session.scalars(
        select(User).where(User.posts.any())
    ).all()
