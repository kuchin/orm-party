import { raw } from "@mikro-orm/core";

try {
  await orm.em.transactional(async (em) => {
    await em.nativeUpdate(Account, { user: 1 }, {
      balance: raw("balance - 100"),
    });

    await em.nativeUpdate(Account, { user: 2 }, {
      balance: raw("balance + 100"),
    });

    if (error_condition) {
      throw new Error("Transfer failed");
    }
  });
} catch {
  // transaction rolled back automatically
}
