await dataSource
  .getRepository(User)
  .increment({ id: 1 }, "views", 1);
