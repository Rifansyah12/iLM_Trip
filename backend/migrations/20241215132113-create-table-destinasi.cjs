'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('table_destinasi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_gunung: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deskripsi_gunung:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      foto_gunung: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      harga_tiket: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      createdAt: {
        allowNull: false,
        type:Sequelize.DATE
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('table_destinasi');
  }
};
