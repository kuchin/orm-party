import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: "users" })
class User {
  @PrimaryKey()
  id!: number;

  @Property({ type: "json" })
  metadata!: Record<string, unknown>;
}

// Store JSON
await orm.em.nativeUpdate(User, { id: 1 }, {
  metadata: { theme: "dark", lang: "en" },
});

// Query JSON field
const users = await orm.em
  .createQueryBuilder(User, "u")
  .where(`u.metadata->>'theme' = ?`, ["dark"])
  .getResultList();

// Nested JSON
const users2 = await orm.em
  .createQueryBuilder(User, "u")
  .where(`u.metadata->'address'->>'city' = ?`, ["NYC"])
  .getResultList();
