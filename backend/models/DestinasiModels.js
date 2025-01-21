import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Destinasi = db.define('table_destinasi', {
  nama_gunung: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100], // Nama gunung minimal 3 karakter dan maksimal 100
    },
  },
  deskripsi_gunung: {
    type: DataTypes.TEXT, // Menggunakan TEXT untuk deskripsi panjang
    allowNull: false,
    validate: {
      notEmpty: true, // Tidak boleh kosong
    },
  },
  foto_gunung: {
    type: DataTypes.STRING, // URL atau path untuk menyimpan foto
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [0, 255], // Panjang maksimal path atau URL adalah 255 karakter
    },
  },
  harga_tiket: {
    type: DataTypes.FLOAT, // Menggunakan FLOAT untuk harga
    allowNull: false,
    validate: {
      notEmpty: true,
      isFloat: true, // Memastikan nilai adalah angka
      min: 0, // Harga tiket tidak boleh negatif
    },
  },
}, {
  freezeTableName: true, // Menjaga nama tabel tetap 'table_destinasi'
});

export default Destinasi;
