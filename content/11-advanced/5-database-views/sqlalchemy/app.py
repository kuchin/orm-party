from sqlalchemy import select

# Map view to a model
class ActiveUser(Base):
    __tablename__ = "active_users"

    id: Mapped[int] = mapped_column(
        primary_key=True
    )
    name: Mapped[str]
    email: Mapped[str]

# Query like any model
users = session.scalars(
    select(ActiveUser).where(
        ActiveUser.name.like("A%")
    )
).all()
