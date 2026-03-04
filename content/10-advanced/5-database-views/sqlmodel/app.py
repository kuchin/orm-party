from sqlmodel import SQLModel, Field, select


# Create view via migration SQL
class ActiveUser(SQLModel, table=True):
    __tablename__ = "active_users"

    id: int | None = Field(default=None, primary_key=True)
    name: str
    email: str


# Query like any model
users = session.exec(
    select(ActiveUser).where(
        ActiveUser.name.startswith("A")
    )
).all()
