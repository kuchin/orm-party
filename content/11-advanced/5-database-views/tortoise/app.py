# Create view via migration raw SQL
# Map to an unmanaged model
from tortoise.models import Model
from tortoise import fields

class ActiveUser(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)
    email = fields.CharField(max_length=255)

    class Meta:
        table = "active_users"
        managed = False

# Query like any model
users = await ActiveUser.filter(
    name__startswith="A"
)
