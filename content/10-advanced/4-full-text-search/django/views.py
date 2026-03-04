from django.contrib.postgres.search import (
    SearchVector,
    SearchQuery,
)

results = Article.objects.annotate(
    search=SearchVector("title", "body"),
).filter(
    search=SearchQuery("database optimization")
)
