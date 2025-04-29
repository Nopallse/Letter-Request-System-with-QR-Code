'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Get student user IDs
    const studentUsers = await queryInterface.sequelize.query(
      `SELECT id FROM users WHERE role = 'mahasiswa'`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const mahasiswaData = [
      {
        nim: '2211522020',
        name: 'Naufal',
        departemen: 'Sistem Informasi',
        phone: '081234567890',
        gender: 'laki-laki',
        address: 'filano jaya 2',
        id: studentUsers[0].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    return queryInterface.bulkInsert('mahasiswa', mahasiswaData);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mahasiswa', null, {});
  }
};