# Posts by author name (spanning relationships)
posts = (
    Post.select()
    .join(User, on=(Post.author == User.id))
    .where(User.name == "Alice")
)

# Users who have at least one post
users = (
    User.select()
    .join(Post, on=(Post.author == User.id))
    .distinct()
)
