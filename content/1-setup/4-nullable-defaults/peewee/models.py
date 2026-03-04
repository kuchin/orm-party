from datetime import datetime
from peewee import BooleanField, CharField, DateTimeField, IntegerField, Model, TextField


class Post(Model):
    title = CharField(max_length=255)
    content = TextField(null=True)
    views = IntegerField(default=0)
    is_published = BooleanField(default=False)
    published_at = DateTimeField(null=True)
    created_at = DateTimeField(default=datetime.utcnow)

    class Meta:
        table_name = "posts"
