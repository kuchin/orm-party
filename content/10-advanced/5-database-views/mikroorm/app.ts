import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

// Create view via migration SQL and map as read-only entity
@Entity({ tableName: "active_users", readonly: true })
class ActiveUser {
  @PrimaryKey()
  id!: number;

  @Property({ length: 100 })
  name!: string;

  @Property({ length: 255 })
  email!: string;
}

const users = await orm.em.find(ActiveUser, {
  name: { $like: "A%" },
});
