from peewee import JOIN

# LEFT JOIN includes users with no posts
users = (
    User.select(User, Post)
    .join(Post, JOIN.LEFT_OUTER, on=(Post.author == User.id))
)
