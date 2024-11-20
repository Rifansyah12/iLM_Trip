import Coba from "../models/coba.js";  // Import model Coba
import path from 'path'; // Untuk ekstensi file
import fs from 'fs'; // Untuk memindahkan file
import fileUpload from 'express-fileupload'; // Untuk meng-handle upload file

// Fungsi untuk menambahkan data Coba dengan foto
export const createCoba = (req, res) => {
  // Mengecek apakah ada file yang di-upload
  if (!req.files || !req.files.foto) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  // Mendapatkan data dari body request
  const { name, nik, alamat } = req.body;
  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext; // Menyimpan nama file dengan hash MD5 untuk menghindari duplikasi
  const url = `${req.protocol}://${req.get("host")}/images/coba/${fileName}`;

  // Membatasi jenis file yang di-upload
  const allowedType = ['.png', '.jpg', '.jpeg'];
  if (!allowedType.includes(ext.toLocaleLowerCase())) {
    return res.status(422).json({ msg: "Invalid image format" });
  }

  // Membatasi ukuran file
  if (fileSize > 5000000) {
    return res.status(422).json({ msg: "File size too large, must be under 5MB" });
  }

  // Memindahkan file ke folder tujuan
  file.mv(`./public/images/coba/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });

    try {
      // Menyimpan data ke database
      await Coba.create({
        name,
        foto: fileName, // Nama file foto yang disimpan di database
        nik,
        alamat,
      });

      // Mengirim respons sukses
      res.status(201).json({ msg: "Data successfully added", url: url });

    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Server error" });
    }
  });
};
