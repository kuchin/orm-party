from sqlmodel import select

with Session(engine) as session:
    # SQLModel uses explicit join expressions
    posts = session.exec(
        select(User.name, Post.title)
        .join(Post, User.id == Post.author_id)
    ).all()
