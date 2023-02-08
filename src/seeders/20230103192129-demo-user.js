"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "ChoTrien",
        lastName: "Hihih",
        email: "trien@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "John",
        lastName: "Doe",
        email: "leo@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
