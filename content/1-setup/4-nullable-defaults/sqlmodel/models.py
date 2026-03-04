from datetime import datetime
from sqlmodel import SQLModel, Field
from sqlalchemy import Column, Text


class Post(SQLModel, table=True):
    __tablename__ = "posts"

    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(max_length=255)
    content: str | None = Field(default=None, sa_column=Column(Text, nullable=True))
    views: int = 0
    is_published: bool = False
    published_at: datetime | None = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
