module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Doc_schedules', [
      {
        doc_id: 2,
        user_id: 1,
        pet_id: 1,
        date_of_receipt: new Date(2022, 8, 1, 15, 40),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 2,
        user_id: 1,
        pet_id: 1,
        date_of_receipt: new Date(2022, 8, 1, 16, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Doc_schedules', null, {});
  },
};
