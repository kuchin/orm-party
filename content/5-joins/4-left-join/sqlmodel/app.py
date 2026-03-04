from sqlmodel import select

with Session(engine) as session:
    # Outer join keeps users with no posts
    rows = session.exec(
        select(User.name, Post.title)
        .outerjoin(Post, User.id == Post.author_id)
    ).all()
