from peewee import JOIN, fn

users = (
    User.select(
        User.name,
        fn.COUNT(Post.id).alias("post_count"),
    )
    .join(Post, JOIN.LEFT_OUTER, on=(Post.author == User.id))
    .group_by(User.id, User.name)
    .order_by(fn.COUNT(Post.id).desc())
)
