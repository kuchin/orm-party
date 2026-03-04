# Peewee uses explicit join expressions
posts = (
    Post.select(User.name.alias("author_name"), Post.title)
    .join(User, on=(Post.author == User.id))
)
