'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {nome: 'John Doe'},
      {nome: 'marimari'},
      {nome: 'willianwill'},
      {nome: 'luccao'},
      {nome: 'kau'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
