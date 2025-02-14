import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Gallery = db.define(
  "table_gallery",
  {
    
    foto: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255], // Nama gunung minimal 3 karakter dan maksimal 100
      },
    },

    id_destinasi: {
      type: DataTypes.INTEGER,
      allowNull: true,

      references: {
        model: "table_destinasi",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true, // Menjaga nama tabel tetap 'table_des'
  }
);

export default Gallery;
