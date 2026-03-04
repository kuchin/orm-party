from datetime import datetime
from sqlmodel import SQLModel, Field
from sqlalchemy import Column, JSON, Text


class Product(SQLModel, table=True):
    __tablename__ = "products"

    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=255)
    description: str = Field(sa_column=Column(Text))
    price: float
    quantity: int
    in_stock: bool
    release_date: datetime
    tags: dict = Field(default_factory=dict, sa_column=Column(JSON))
