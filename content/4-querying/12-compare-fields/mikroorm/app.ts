const products = await orm.em
  .createQueryBuilder(Product, "p")
  .select("*")
  .where("p.sale_price < p.original_price")
  .getResultList();
