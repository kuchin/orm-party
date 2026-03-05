import { DataTypes, Model, Op } from "sequelize";

// Create view via migration SQL and map it as read-only model
class ActiveUser extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
}

ActiveUser.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
  },
  {
    sequelize,
    tableName: "active_users",
    timestamps: false,
  },
);

const users = await ActiveUser.findAll({
  where: { name: { [Op.like]: "A%" } },
});
