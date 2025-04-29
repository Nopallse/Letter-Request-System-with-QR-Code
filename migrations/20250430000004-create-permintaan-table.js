'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('permintaan', {
      idPermintaan: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nim: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'mahasiswa',
          key: 'nim'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      target: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tujuan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      namaOrangtua: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pangkatGolongan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      unitKerja: {
        type: Sequelize.STRING,
        allowNull: false
      },
      instansiInduk: {
        type: Sequelize.STRING,
        allowNull: false
      },
      berkas: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'diajukan'
      },
      tanggal: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.literal('CURRENT_DATE')
      },
      waktu: {
        type: Sequelize.TIME,
        defaultValue: Sequelize.literal('CURRENT_TIME')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('permintaan');
  }
};