from sqlalchemy import select, func

with Session(engine) as session:
    rows = session.execute(
        select(User.name, func.count(Post.id).label("post_count"))
        .join(Post, User.id == Post.author_id)
        .group_by(User.id, User.name)
        .having(func.count(Post.id) > 5)
    ).all()
