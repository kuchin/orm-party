import { raw } from "@mikro-orm/core";

const em = orm.em.fork();

await em.nativeUpdate(User, { id: 1 }, {
  views: raw("views + 1"),
});
