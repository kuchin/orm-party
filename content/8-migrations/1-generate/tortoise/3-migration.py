from tortoise import fields
from tortoise.migrations import Migration, operations

class Migration(Migration):
    dependencies = [("models", "0001_initial")]
    operations = [
        operations.AddField(
            model_name="User",
            name="age",
            field=fields.IntField(null=True),
        ),
    ]
