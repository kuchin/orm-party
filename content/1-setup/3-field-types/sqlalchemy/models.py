from datetime import datetime
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import String, Text, JSON


class Base(DeclarativeBase):
    pass


class Product(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(255))
    description: Mapped[str] = mapped_column(Text)
    price: Mapped[float] = mapped_column()
    quantity: Mapped[int] = mapped_column()
    in_stock: Mapped[bool] = mapped_column()
    release_date: Mapped[datetime] = mapped_column()
    tags: Mapped[dict] = mapped_column(JSON)
