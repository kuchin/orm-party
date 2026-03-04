from peewee import CharField, ForeignKeyField, Model


class Post(Model):
    title = CharField(max_length=255)

    class Meta:
        table_name = "posts"


class Tag(Model):
    name = CharField(max_length=100, unique=True)

    class Meta:
        table_name = "tags"


class PostTag(Model):
    post = ForeignKeyField(Post, backref="post_tags", column_name="post_id")
    tag = ForeignKeyField(Tag, backref="tag_posts", column_name="tag_id")

    class Meta:
        table_name = "post_tags"
        indexes = ((('post', 'tag'), True),)
