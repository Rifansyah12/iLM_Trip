import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const PendaftaranPeserta = db.define(
  "table_pendaftaran",
  {
    nama_lengkap: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    alamat_lengkapi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    domisili: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nomer_telepon: {
      type: DataTypes.STRING, // Menggunakan STRING agar tidak kehilangan angka 0 di awal
      allowNull: true,
    },
    nomertelp_darurat: {
      type: DataTypes.STRING, // STRING untuk nomor telepon
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pekerjaan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    paket: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fasilitas: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    meetingPoint: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fotoKtp: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 255],
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Belum Disetujui", // Status default saat pendaftaran dibuat
    },
    kesehatan: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 255],
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
    
    id_anothertrip: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "table_anothertrip",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default PendaftaranPeserta;
