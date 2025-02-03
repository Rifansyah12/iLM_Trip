module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Admins",
      [
        {
          nama: "Admin1",
          username: "admin1",
          password: "hashedPassword123", // Gantilah dengan password yang di-hash
          foto: "admin1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Admin2",
          username: "admin2",
          password: "hashedPassword456",
          foto: "admin2.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Admins", null, {});
  },
};
