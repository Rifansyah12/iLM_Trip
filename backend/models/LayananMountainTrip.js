import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const MountainTrip = db.define('table_mountaintrip', {
  nama_layanan: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100], // Nama gunung minimal 3 karakter dan maksimal 100
    },
  },
  deskripsi_layanan: {
    type: DataTypes.TEXT, // Menggunakan TEXT untuk deskripsi panjang
    allowNull: false,
    validate: {
      notEmpty: true, // Tidak boleh kosong
    },
  },
  foto: {
    type: DataTypes.STRING, // URL atau path untuk menyimpan foto
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [0, 255], // Panjang maksimal path atau URL adalah 255 karakter
    },
  },
}, {
  freezeTableName: true, // Menjaga nama tabel tetap 'table_destinasi'
});

export default MountainTrip;
