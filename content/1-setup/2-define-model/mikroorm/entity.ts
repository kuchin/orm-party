import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: "users" })
export class User {
  @PrimaryKey()
  id!: number;

  @Property({ length: 255 })
  name!: string;

  @Property({ length: 255, unique: true })
  email!: string;

  @Property({ fieldName: "created_at", onCreate: () => new Date() })
  createdAt = new Date();
}
