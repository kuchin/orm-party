# model: metadata = mapped_column(JSONB)

# Store JSON
user.metadata = {"theme": "dark", "lang": "en"}
session.commit()

# Query JSON field
users = session.scalars(
    select(User).where(
        User.metadata["theme"].astext == "dark"
    )
).all()

# Nested JSON
users = session.scalars(
    select(User).where(
        User.metadata["address"]["city"].astext
        == "NYC"
    )
).all()
