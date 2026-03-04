// Add a new field to the entity

@Entity({ tableName: "users" })
export class User {
  @PrimaryKey()
  id!: number;

  @Property({ length: 100 })
  name!: string;

  @Property({ length: 255, unique: true })
  email!: string;

  @Property({ nullable: true })
  age?: number; // ← new
}
