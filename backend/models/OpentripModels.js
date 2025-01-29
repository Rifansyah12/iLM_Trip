import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Opentrip = db.define(
  "table_opentrip",
  {
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100], // Judul minimal 3 karakter dan maksimal 100
      },
    },
    nama_gunung: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100], // Nama gunung minimal 3 karakter dan maksimal 100
      },
    },
    lokasi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    paket: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
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
    keterangan: {
      type: DataTypes.TEXT, // Menggunakan TEXT untuk deskripsi panjang
      allowNull: true,
    },
  },
  {
    freezeTableName: true, // Menjaga nama tabel tetap 'table_opentrip'
  }
);

export default Opentrip;
