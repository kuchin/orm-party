import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
  Sequelize,
} from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
});

export class Employee extends Model<
  InferAttributes<Employee>,
  InferCreationAttributes<Employee>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare managerId: ForeignKey<Employee["id"]> | null;
  declare manager?: NonAttribute<Employee>;
  declare reports?: NonAttribute<Employee[]>;
}

Employee.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
    managerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "manager_id",
      references: { model: "employees", key: "id" },
    },
  },
  { sequelize, tableName: "employees", timestamps: false },
);

Employee.belongsTo(Employee, { as: "manager", foreignKey: "managerId" });
Employee.hasMany(Employee, { as: "reports", foreignKey: "managerId" });
