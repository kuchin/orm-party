from tortoise.models import Model
from tortoise import fields

class User(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)

class Profile(Model):
    id = fields.IntField(pk=True)
    bio = fields.TextField()
    user = fields.OneToOneField(
        "models.User", related_name="profile"
    )
