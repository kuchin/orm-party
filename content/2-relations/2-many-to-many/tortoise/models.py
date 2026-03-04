from tortoise.models import Model
from tortoise import fields

class Tag(Model):
    name = fields.CharField(max_length=100, unique=True)

class Post(Model):
    title = fields.CharField(max_length=255)
    tags = fields.ManyToManyField(
        "models.Tag", related_name="posts"
    )
