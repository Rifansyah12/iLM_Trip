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

    await queryInterface.createTable('paket_pendakian', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_paket: {
        type: Sequelize.STRING,
        allowNull: false

      },
      deskripsi_paket: {
        type: Sequelize.TEXT,
        allowNull: true
        
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      destinasi_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'table_destinasi',  // Nama tabel yang akan direlasikan
          key: 'id' // Kolom pada tabel yang akan direlasikan
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt : {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt : {
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
    await queryInterface.dropTable('paket_pendakian');
  }
};
