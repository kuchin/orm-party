# Fetch posts with author and tags
posts = await Post.all().select_related(
    "author"
).prefetch_related("tags")
for post in posts:
    print(post.author.name, [t.name for t in post.tags])
