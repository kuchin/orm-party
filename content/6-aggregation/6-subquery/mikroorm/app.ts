const users = await orm.em
  .createQueryBuilder(User, "u")
  .select("u.*")
  .where(`u.id in (
    select o.user_id
    from orders o
    where o.amount > (
      select avg(amount) from orders
    )
  )`)
  .getResultList();
