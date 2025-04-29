'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // First, get the user IDs with admin role
    const adminUsers = await queryInterface.sequelize.query(
      `SELECT id FROM users WHERE role = 'admin'`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // Map user IDs to admin entries
    const adminData = [
      {
        nip: '198001012010121001',
        name: 'Khairisman Fedra, S.pt',
        pangkat_golongan: 'Pembina / IV-a',
        jabatan: 'Kepala Kantor Sektariat',
        fakultas: 'Teknologi Informasi',
        id: adminUsers[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
    ];

    return queryInterface.bulkInsert('admin', adminData);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admin', null, {});
  }
};