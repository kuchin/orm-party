import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, (e) => e.reports, { nullable: true })
  manager: Employee;

  @OneToMany(() => Employee, (e) => e.manager)
  reports: Employee[];
}
