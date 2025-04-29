'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('surat', {
      nomorSurat: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      idPermintaan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'permintaan',
          key: 'idPermintaan'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nip: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'admin',
          key: 'nip'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      qr: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tanggal_terbit: {
        type: Sequelize.DATE,
        allowNull: false
      },
      valid_until: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('surat');
  }
};
