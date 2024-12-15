'use strict';
import { Model } from "sequelize";
export default(sequelize, DataTypes)=> {
  class Destinasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Destinasi.init({
    nama_gunung: DataTypes.STRING,
    deskripsi_gunung: DataTypes.TEXT,
    foto_gunung: DataTypes.STRING,
    harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Destinasi',
  });
  return Destinasi;
};