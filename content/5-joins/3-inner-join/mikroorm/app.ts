// MikroORM uses explicit joins via QueryBuilder
const posts = await orm.em
  .createQueryBuilder(Post, "p")
  .select(["a.name as author_name", "p.title"])
  .join("p.author", "a")
  .execute();
