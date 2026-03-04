# model: metadata = fields.JSONField(default=dict)

# Store JSON
await User.filter(id=1).update(
    metadata={"theme": "dark", "lang": "en"}
)

# Query JSON field
users = await User.filter(
    metadata__theme="dark"
)

# Nested JSON
users = await User.filter(
    metadata__address__city="NYC"
)
