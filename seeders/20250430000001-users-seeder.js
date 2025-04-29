'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@gmail.com',
        password: hashedPassword,
        role: 'admin',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: '2211522020_naufal@student.unand.ac.id',
        password: hashedPassword,
        role: 'mahasiswa',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};