from datetime import datetime
from peewee import CharField, DateTimeField, Model


class User(Model):
    name = CharField(max_length=255)
    email = CharField(max_length=255, unique=True)
    created_at = DateTimeField(default=datetime.utcnow)

    class Meta:
        table_name = "users"
