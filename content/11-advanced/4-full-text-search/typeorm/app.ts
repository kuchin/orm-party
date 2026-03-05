const articles = await dataSource
  .getRepository(Article)
  .createQueryBuilder("a")
  .where(
    `to_tsvector('english',
      a.title || ' ' || a.body)
    @@ plainto_tsquery('english', :query)`,
    { query: "database optimization" }
  )
  .getMany();
