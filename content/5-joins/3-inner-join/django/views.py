# Django uses implicit joins via lookups
posts = Post.objects.select_related("author").values(
    "author__name", "title"
)
