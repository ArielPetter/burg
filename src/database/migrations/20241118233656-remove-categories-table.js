/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('products', 'category');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products', 'category', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
