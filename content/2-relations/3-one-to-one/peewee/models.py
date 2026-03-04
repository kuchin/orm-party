from peewee import CharField, ForeignKeyField, Model, TextField


class User(Model):
    name = CharField(max_length=255)

    class Meta:
        table_name = "users"


class Profile(Model):
    bio = TextField()
    user = ForeignKeyField(User, unique=True, backref="profile", column_name="user_id")

    class Meta:
        table_name = "profiles"
