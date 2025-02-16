import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    produk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "Product", // Pastikan nama tabel sesuai
    timestamps: false, // Matikan `createdAt` & `updatedAt`
  }
);

export default Product;
