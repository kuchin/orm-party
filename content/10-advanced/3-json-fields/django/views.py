# model: metadata = JSONField(default=dict)

# Store JSON
User.objects.filter(id=1).update(
    metadata={"theme": "dark", "lang": "en"}
)

# Query JSON field
users = User.objects.filter(
    metadata__theme="dark"
)

# Nested JSON
users = User.objects.filter(
    metadata__address__city="NYC"
)
