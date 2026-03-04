from typing import Optional
from sqlmodel import SQLModel, Field, Relationship


class Employee(SQLModel, table=True):
    __tablename__ = "employees"

    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=255)
    manager_id: int | None = Field(default=None, foreign_key="employees.id")
    manager: Optional["Employee"] = Relationship(
        back_populates="reports",
        sa_relationship_kwargs={"remote_side": "Employee.id"},
    )
    reports: list["Employee"] = Relationship(back_populates="manager")
