from tortoise.functions import Count

users = await User.annotate(
    post_count=Count("posts")
).filter(post_count__gt=5)
