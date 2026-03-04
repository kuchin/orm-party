const em = orm.em.fork();

await em.nativeDelete(User, { id: 1 });
