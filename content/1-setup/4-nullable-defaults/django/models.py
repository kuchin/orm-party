from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(null=True, blank=True)
    views = models.IntegerField(default=0)
    is_published = models.BooleanField(default=False)
    published_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
