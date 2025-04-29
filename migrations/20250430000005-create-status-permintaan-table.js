'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('statusPermintaan', {
      idStatus: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      idPermintaan: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'permintaan',
          key: 'idPermintaan'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      tanggal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('statusPermintaan');
  }
};