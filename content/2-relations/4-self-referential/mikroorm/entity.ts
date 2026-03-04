import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";

@Entity({ tableName: "employees" })
export class Employee {
  @PrimaryKey()
  id!: number;

  @Property({ length: 255 })
  name!: string;

  @ManyToOne(() => Employee, {
    nullable: true,
    fieldName: "manager_id",
  })
  manager?: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  reports = new Collection<Employee>(this);
}
