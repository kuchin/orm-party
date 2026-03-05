from tortoise.contrib.postgres.search import (
    SearchVector,
    SearchQuery,
)

results = await Article.annotate(
    search=SearchVector("title", "body")
).filter(
    search=SearchQuery("database optimization")
)
