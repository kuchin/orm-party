from sqlmodel import SQLModel, Field, Relationship


class User(SQLModel, table=True):
    __tablename__ = "users"

    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=255)
    posts: list["Post"] = Relationship(back_populates="author")


class Post(SQLModel, table=True):
    __tablename__ = "posts"

    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(max_length=255)
    author_id: int = Field(foreign_key="users.id")
    author: User | None = Relationship(back_populates="posts")
