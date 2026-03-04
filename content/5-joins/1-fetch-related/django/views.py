# Prefetch related posts for a user
user = User.objects.prefetch_related("posts").get(id=1)
for post in user.posts.all():
    print(post.title)

# Select related author for posts (ForeignKey)
posts = Post.objects.select_related("author").all()
