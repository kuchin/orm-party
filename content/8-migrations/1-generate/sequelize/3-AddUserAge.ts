// Generated: migrations/20240115000000-add-user-age.js

module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.addColumn("users", "age", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  async down(queryInterface: any) {
    await queryInterface.removeColumn("users", "age");
  },
};
