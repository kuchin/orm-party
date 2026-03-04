from tortoise.models import Model
from tortoise import fields

class Product(Model):
    name = fields.CharField(max_length=255)
    description = fields.TextField()
    price = fields.FloatField()
    quantity = fields.IntField()
    in_stock = fields.BooleanField()
    release_date = fields.DatetimeField()
    tags = fields.JSONField()
