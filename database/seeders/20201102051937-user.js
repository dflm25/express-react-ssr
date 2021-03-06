'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     **/
    const saltRounds = 10;
    const myPlaintextPassword = '123456';
    const password = await bcrypt.hash(myPlaintextPassword, saltRounds);
    
    await queryInterface.bulkInsert('users', [{
      username: 'Daniel Lucumi',
      email: 'daniel@test.com',
      password: password,
      status: 1,
      createdAt: '2020-11-01',
      updatedAt: '2020-11-01',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     **/
    await queryInterface.bulkDelete('users', null, {}); 
  }
};
