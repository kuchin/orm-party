from sqlmodel import SQLModel, Field, Relationship


class PostTagLink(SQLModel, table=True):
    __tablename__ = "post_tags"

    post_id: int = Field(foreign_key="posts.id", primary_key=True)
    tag_id: int = Field(foreign_key="tags.id", primary_key=True)


class Tag(SQLModel, table=True):
    __tablename__ = "tags"

    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(unique=True, max_length=100)
    posts: list["Post"] = Relationship(
        back_populates="tags",
        link_model=PostTagLink,
    )


class Post(SQLModel, table=True):
    __tablename__ = "posts"

    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(max_length=255)
    tags: list[Tag] = Relationship(
        back_populates="posts",
        link_model=PostTagLink,
    )
