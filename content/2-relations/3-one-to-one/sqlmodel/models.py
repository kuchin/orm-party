from typing import Optional
from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, Text


class User(SQLModel, table=True):
    __tablename__ = "users"

    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=255)
    profile: Optional["Profile"] = Relationship(back_populates="user")


class Profile(SQLModel, table=True):
    __tablename__ = "profiles"

    id: int | None = Field(default=None, primary_key=True)
    bio: str = Field(sa_column=Column(Text))
    user_id: int = Field(foreign_key="users.id", unique=True)
    user: User | None = Relationship(back_populates="profile")
