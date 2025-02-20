import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Anothertrip = db.define(
  "table_anothertrip",
  {
    nama_layanan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100], // Nama gunung minimal 3 karakter dan maksimal 100
      },
    },
    keterangan_singkat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 300], // Nama gunung minimal 3 karakter dan maksimal 100
      },
    },
    keterangan_layanan: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 5000],
      },
    },
    deskripsi_layanan: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lokasi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100], // Nama gunung minimal 3 karakter dan maksimal 100
      },
    },

    harga: {
      type: DataTypes.FLOAT, // Menggunakan FLOAT untuk harga
      allowNull: false,
      validate: {
        notEmpty: true,
        isFloat: true, // Memastikan nilai adalah angka
        min: 0, // Harga tidak boleh negatif
      },
    },
    foto: {
      type: DataTypes.STRING, // URL atau path untuk menyimpan foto
      allowNull: true, // Foto bersifat opsional
      validate: {
        len: [0, 255], // Panjang maksimal path atau URL adalah 255 karakter
      },
    },
  },
  {
    freezeTableName: true, // Menjaga nama tabel tetap 'table_des'
  }
);

export default Anothertrip;
