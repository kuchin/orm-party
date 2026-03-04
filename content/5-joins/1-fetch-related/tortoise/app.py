# Prefetch related posts for a user
user = await User.get(id=1).prefetch_related("posts")
for post in user.posts:
    print(post.title)

# Eager-load author (single query with JOIN)
posts = await Post.all().select_related("author")
