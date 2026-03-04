from datetime import datetime
from peewee import (
    BooleanField,
    CharField,
    DateTimeField,
    FloatField,
    IntegerField,
    Model,
    TextField,
)
from playhouse.postgres_ext import BinaryJSONField


class Product(Model):
    name = CharField(max_length=255)
    description = TextField()
    price = FloatField()
    quantity = IntegerField()
    in_stock = BooleanField()
    release_date = DateTimeField()
    tags = BinaryJSONField(default=dict)

    class Meta:
        table_name = "products"
