# Add a new column to the model

class User(Base):
    __tablename__ = "users"
    id = mapped_column(Integer, primary_key=True)
    name = mapped_column(String(100))
    email = mapped_column(String, unique=True)
    age = mapped_column(Integer, nullable=True)  # ← new
