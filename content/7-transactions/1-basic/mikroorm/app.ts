import { raw } from "@mikro-orm/core";

await orm.em.transactional(async (em) => {
  const user = em.create(User, {
    name: "Alice",
    email: "alice@example.com",
  });
  await em.persistAndFlush(user);

  await em.nativeUpdate(Account, { user: user.id }, {
    balance: raw("balance - 100"),
  });
});
