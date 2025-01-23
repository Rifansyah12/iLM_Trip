import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Admin = db.define('table_admin', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100],
    },
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      len: [3, 50],
    },
  },


  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      
    }
  },


  foto: {
    type: DataTypes.STRING,
    allowNull: true,
    validate:{
      len: [0, 255]
    }
  },

},{
  freezeTableName: true,
});

export default Admin;