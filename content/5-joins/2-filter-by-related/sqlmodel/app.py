from sqlmodel import select

with Session(engine) as session:
    # Posts by author name (spanning relationships)
    posts = session.exec(
        select(Post)
        .join(User, Post.author_id == User.id)
        .where(User.name == "Alice")
    ).all()

    # Users who have at least one post
    users = session.exec(
        select(User).where(User.posts.any())
    ).all()
