from peewee import prefetch

# Prefetch related posts for a user
user = prefetch(
    User.select().where(User.id == 1),
    Post.select(),
)[0]
for post in user.posts:
    print(post.title)

# Select related author for posts (ForeignKey)
posts = (
    Post.select(Post, User)
    .join(User, on=(Post.author == User.id))
)
