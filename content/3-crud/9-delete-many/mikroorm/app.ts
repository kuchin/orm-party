const em = orm.em.fork();

await em.createQueryBuilder(User)
  .delete()
  .where({ email: { $like: "%@old-domain.com" } })
  .execute();
