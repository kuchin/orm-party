from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import JSONB
from sqlmodel import Field, SQLModel, select


class User(SQLModel, table=True):
    __tablename__ = "users"

    id: int | None = Field(default=None, primary_key=True)
    profile: dict = Field(
        default_factory=dict,
        sa_column=Column(JSONB),
    )


# Store JSON
user = session.get(User, 1)
user.profile = {"theme": "dark", "lang": "en"}
session.add(user)
session.commit()

# Query JSON field
users = session.exec(
    select(User).where(
        User.profile["theme"].astext == "dark"
    )
).all()

# Nested JSON
users = session.exec(
    select(User).where(
        User.profile["address"]["city"].astext == "NYC"
    )
).all()
