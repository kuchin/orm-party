from django.db.models import Count

users = (
    User.objects
    .annotate(post_count=Count("posts"))
    .order_by("-post_count")
)
for user in users:
    print(user.name, user.post_count)
