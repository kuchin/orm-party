from peewee import JOIN

# Fetch posts with author and tags
rows = (
    Post.select(Post, User, Tag)
    .join(User, on=(Post.author == User.id))
    .switch(Post)
    .join(PostTag, JOIN.LEFT_OUTER, on=(PostTag.post == Post.id))
    .join(Tag, JOIN.LEFT_OUTER, on=(PostTag.tag == Tag.id))
)
