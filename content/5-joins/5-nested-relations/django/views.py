# Fetch posts with author and tags
posts = Post.objects.select_related("author").prefetch_related("tags").all()
for post in posts:
    print(post.author.name, [t.name for t in post.tags.all()])
