from sqlalchemy.dialects.postgresql import insert

with Session(engine) as session:
    stmt = insert(User).values(
        name="Alice Smith", email="alice@example.com"
    ).on_conflict_do_update(
        index_elements=["email"],
        set_={"name": "Alice Smith"},
    )
    session.exec(stmt)
    session.commit()
