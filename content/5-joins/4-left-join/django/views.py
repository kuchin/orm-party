# prefetch_related uses a separate query (like LEFT JOIN behavior)
users = User.objects.prefetch_related("posts").all()
for user in users:
    posts = user.posts.all()  # empty list if no posts
