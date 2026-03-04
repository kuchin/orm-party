const products = await dataSource
  .getRepository(Product)
  .createQueryBuilder("p")
  .where("p.sale_price < p.original_price")
  .getMany();
