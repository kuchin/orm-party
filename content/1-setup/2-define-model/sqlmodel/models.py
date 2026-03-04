from datetime import datetime
from sqlmodel import SQLModel, Field


class User(SQLModel, table=True):
    __tablename__ = "users"

    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=255)
    email: str = Field(unique=True, max_length=255)
    created_at: datetime = Field(default_factory=datetime.utcnow)
