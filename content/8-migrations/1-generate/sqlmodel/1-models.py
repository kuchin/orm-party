# Add a new field to the model

class User(SQLModel, table=True):
    __tablename__ = "users"

    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=100)
    email: str = Field(unique=True, max_length=255)
    age: int | None = Field(default=None)  # ← new
