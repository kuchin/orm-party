// Add a new field to the model

class User extends Model {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare age: number | null; // ← new
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    age: { type: DataTypes.INTEGER, allowNull: true },
  },
  { sequelize, tableName: "users" },
);
