from typing import Optional
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import String, ForeignKey


class Base(DeclarativeBase):
    pass


class Employee(Base):
    __tablename__ = "employees"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(255))
    manager_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("employees.id")
    )
    manager: Mapped[Optional["Employee"]] = relationship(
        back_populates="reports", remote_side=[id]
    )
    reports: Mapped[list["Employee"]] = relationship(back_populates="manager")
