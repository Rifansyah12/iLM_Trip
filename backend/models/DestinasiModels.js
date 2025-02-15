import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Destinasi = db.define(
  "table_destinasi",
  {
    paket: {
      type: DataTypes.STRING,
      allowNull: true,
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
    deskripsi: {
      type: DataTypes.TEXT, // Menambahkan deskripsi destinasi
      allowNull: true,
    },
    id_layanan: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: "table_mountaintrip",
        key: "id",
      },
    },
    id_privatetrip: {
      type: DataTypes.INTEGER,
      allowNull: true,

      references: {
        model: "table_privatetrip",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true, // Menjaga nama tabel tetap 'table_des'
  }
);

export default Destinasi;
