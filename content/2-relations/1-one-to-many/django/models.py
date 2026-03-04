from django.db import models


class User(models.Model):
    name = models.CharField(max_length=255)


class Post(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="posts"
    )
