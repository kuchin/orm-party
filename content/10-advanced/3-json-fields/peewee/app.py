from playhouse.postgres_ext import BinaryJSONField

# model: metadata = BinaryJSONField(default=dict)

# Store JSON
User.update(
    metadata={"theme": "dark", "lang": "en"}
).where(User.id == 1).execute()

# Query JSON field
users = User.raw(
    "SELECT * FROM users "
    "WHERE metadata->>'theme' = %s",
    "dark",
)

# Nested JSON
users = User.raw(
    "SELECT * FROM users "
    "WHERE metadata->'address'->>'city' = %s",
    "NYC",
)
