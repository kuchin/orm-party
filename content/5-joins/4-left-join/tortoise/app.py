# prefetch_related uses separate query (LEFT JOIN behavior)
users = await User.all().prefetch_related("posts")
for user in users:
    posts = user.posts  # empty list if no posts
