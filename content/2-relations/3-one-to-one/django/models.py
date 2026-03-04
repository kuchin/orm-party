from django.db import models


class User(models.Model):
    name = models.CharField(max_length=255)


class Profile(models.Model):
    bio = models.TextField()
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="profile"
    )
