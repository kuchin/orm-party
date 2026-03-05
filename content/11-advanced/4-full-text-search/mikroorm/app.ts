const results = await orm.em
  .createQueryBuilder(Article, "a")
  .where(
    `to_tsvector('english', a.title || ' ' || a.body)
     @@ plainto_tsquery('english', ?)`,
    ["database optimization"],
  )
  .getResultList();
