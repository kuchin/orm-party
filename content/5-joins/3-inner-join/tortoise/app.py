# Tortoise uses implicit joins via lookups
posts = await Post.all().select_related(
    "author"
).values("author__name", "title")
