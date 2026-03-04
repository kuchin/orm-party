import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: "products" })
export class Product {
  @PrimaryKey()
  id!: number;

  @Property({ length: 255 })
  name!: string;

  @Property({ type: "text" })
  description!: string;

  @Property({ type: "float" })
  price!: number;

  @Property({ type: "int" })
  quantity!: number;

  @Property({ fieldName: "in_stock" })
  inStock!: boolean;

  @Property({ fieldName: "release_date" })
  releaseDate!: Date;

  @Property({ type: "json" })
  tags!: Record<string, unknown>;
}
