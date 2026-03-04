from tortoise.models import Model
from tortoise import fields

class Employee(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)
    manager = fields.ForeignKeyField(
        "models.Employee",
        related_name="reports",
        null=True,
    )
