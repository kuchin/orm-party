# Posts by author name (spanning relationships)
posts = Post.objects.filter(author__name="Alice")

# Users who have at least one post
users = User.objects.filter(posts__isnull=False).distinct()
