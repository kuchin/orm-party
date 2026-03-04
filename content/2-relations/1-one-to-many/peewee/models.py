from peewee import CharField, ForeignKeyField, Model


class User(Model):
    name = CharField(max_length=255)

    class Meta:
        table_name = "users"


class Post(Model):
    title = CharField(max_length=255)
    author = ForeignKeyField(User, backref="posts", column_name="author_id")

    class Meta:
        table_name = "posts"
