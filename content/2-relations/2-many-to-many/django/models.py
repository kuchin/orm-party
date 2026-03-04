from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)


class Post(models.Model):
    title = models.CharField(max_length=255)
    tags = models.ManyToManyField(Tag, related_name="posts")
