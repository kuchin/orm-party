from django.db.models import Count

users = (
    User.objects
    .annotate(post_count=Count("posts"))
    .filter(post_count__gt=5)
)
