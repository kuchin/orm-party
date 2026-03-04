from peewee import fn

users = (
    User.select(
        User.name,
        fn.COUNT(Post.id).alias("post_count"),
    )
    .join(Post, on=(Post.author == User.id))
    .group_by(User.id, User.name)
    .having(fn.COUNT(Post.id) > 5)
)
