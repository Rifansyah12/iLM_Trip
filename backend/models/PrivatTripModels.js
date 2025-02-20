import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const PrivateTrip = db.define(
  "table_privatetrip",
  {
    nama_paket: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
        len: [3, 255],
      },
    },

    harga_paket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    foto: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [0, 255],
      },
    },
    id_layanan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "table_mountaintrip",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default PrivateTrip;
