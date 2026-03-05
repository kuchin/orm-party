from sqlalchemy import func

tsvector = func.to_tsvector(
    "english",
    Article.title + " " + Article.body,
)
tsquery = func.plainto_tsquery(
    "english", "database optimization"
)

stmt = select(Article).where(
    tsvector.op("@@")(tsquery)
)
results = session.execute(stmt).scalars().all()
