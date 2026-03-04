from tortoise.functions import Count

users = await User.annotate(
    post_count=Count("posts")
).order_by("-post_count").values("name", "post_count")
