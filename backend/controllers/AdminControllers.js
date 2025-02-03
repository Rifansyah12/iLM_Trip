import Admin from "../models/AdminModels.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import path from 'path';
import { where } from "sequelize";


// REGISTER ADMIN

export const createAdmin = async(req, res)=> {
  if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
  const nama = req.body.nama;
  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const allowedTypes = ['.png', '.jpg', '.jpeg'];
  if(!allowedTypes.includes(ext.toLocaleLowerCase())) return res.status(422).json({msg: "Invalid Images"});
  if(fileSize > 5000000) return res.status(422).json({msg:"file anda terlalu besar Gunakan file dibawah 5 mb"});
  file.mv(`./public/images/Admin/${fileName}`, async(err)=> {
    if(err) return res.status(500).json({msg: err.message});
    const {username, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password Dan Konfirmasinya Tidak Sesuai"});
    const hashPassword = await argon2.hash(password);

    try {
      await Admin.create({
        nama: nama,
        username: username,
        password: hashPassword,
        foto: fileName

      });

      res.status(201).json({msg: "Pengguna Sudah Terdaftar"});
    } catch (error) {
      console.log(error.message)
      res.status(500).json({msg: error.message});
    }
  });

}

// LOGIN ADMIN
export const loginAdmin = async(req, res)=> {
  const {username, password} = req.body;

  try {
    // cari admin berdasarkan username
    const admin = await Admin.findOne({
      where: {username: username},
    });

    // jika admin tidak ditemukan 
    if(!admin) return res.status(404).json({msg: "Username tidak ditemukan"});

    // verifikasi password
    const match = await argon2.verify(admin.password, password);
    if(!match) return res.status(400).json({msg: "Password Salah"});

    const adminId = admin.id;
    const adminNama= admin.nama;
    const adminUsername = admin.username;
    const adminFoto = admin.foto;
    const token = jwt.sign(
      {adminId, adminNama, adminUsername},

      process.env.SECRET_KEY,
      {expiresIn: "1h"} // Token berlaku selama 1 jam

    );

    res.status(200).json({
      msg: "Login Berhasil",
      token: token,
      adminId: adminId,
      adminNama: adminNama,
      adminUsername: adminUsername,
      adminFoto: adminFoto
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({msg: error.message});
    
  }
}

export const getAdmin = async(req, res)=>{
  try {
    const response = await Admin.findAll({
      attributes: ['id', 'nama', 'username', 'password', 'foto', 'updatedAt'],

    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({msg:error.message})
    
  }
}




