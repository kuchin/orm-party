from sqlalchemy import select

with Session(engine) as session:
    rows = session.execute(
        select(User.name, Post.title)
        .join(Post, User.id == Post.author_id)
    ).all()
