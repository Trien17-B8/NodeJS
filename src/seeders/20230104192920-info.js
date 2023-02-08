"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Infos", [
      {
        id: "1",
        fullName: "Trien",
        address: "ThaiBinh",
        email: "leo@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        fullName: "Vu",
        address: "ThaiBinh",
        email: "hii@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        fullName: "Tien",
        address: "NamDinh",
        email: "haha@example.com",
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
