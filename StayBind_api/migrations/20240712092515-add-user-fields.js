'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'mobileNumber', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('Users', 'numberOfProperties', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
    await queryInterface.addColumn('Users', 'location', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'mobileNumber');
    await queryInterface.removeColumn('Users', 'numberOfProperties');
    await queryInterface.removeColumn('Users', 'location');
  }
};
