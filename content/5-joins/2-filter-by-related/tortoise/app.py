# Posts by author name (spanning relationships)
posts = await Post.filter(author__name="Alice")

# Users who have at least one post
users = await User.filter(
    posts__isnull=False
).distinct()
