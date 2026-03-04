import os
from sqlmodel import SQLModel, create_engine

engine = create_engine(os.environ["DATABASE_URL"])
SQLModel.metadata.create_all(engine)
