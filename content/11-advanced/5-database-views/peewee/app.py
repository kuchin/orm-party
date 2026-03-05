from peewee import CharField, IntegerField, Model

# Create view via SQL migration
# Map to read-only model
class ActiveUser(Model):
    id = IntegerField(primary_key=True)
    name = CharField(max_length=100)
    email = CharField(max_length=255)

    class Meta:
        table_name = "active_users"


# Query like any model
users = ActiveUser.select().where(
    ActiveUser.name.startswith("A")
)
