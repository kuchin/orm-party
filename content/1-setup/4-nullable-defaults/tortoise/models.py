from tortoise.models import Model
from tortoise import fields

class Post(Model):
    title = fields.CharField(max_length=255)
    content = fields.TextField(null=True)
    views = fields.IntField(default=0)
    is_published = fields.BooleanField(default=False)
    published_at = fields.DatetimeField(null=True)
    created_at = fields.DatetimeField(auto_now_add=True)
