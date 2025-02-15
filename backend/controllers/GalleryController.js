import path from "path";
import fs from "fs";
import Gallery from "../models/GaleriPerjalananModels.js";
import Destinasi from "../models/DestinasiModels.js";

export const createGallery = async (req, res) => {
  if (!req.files || !req.files.foto) {
    return res.status(400).json({ msg: "No files uploaded" });
  }

  let files = req.files.foto;

  // Jika hanya satu file, ubah ke array agar tetap bisa di-loop
  if (!Array.isArray(files)) {
    files = [files];
  }

  const allowedType = [".png", ".jpg", ".jpeg"];
  const maxFileSize = 5000000000; // 5MB
  const { id_destinasi } = req.body;

  try {
    // Cek apakah destinasi tersedia
    const destinasi = await Destinasi.findOne({ where: { id: id_destinasi } });
    if (!destinasi) {
      return res.status(404).json({ msg: "Destinasi tidak ditemukan" });
    }

    let uploadedFiles = [];

    for (let file of files) {
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      const fileName = file.md5 + ext;

      if (!allowedType.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: `Invalid format: ${file.name}` });
      }

      if (fileSize > maxFileSize) {
        return res.status(422).json({ msg: `File terlalu besar: ${file.name}` });
      }

      // Simpan file ke folder
      const uploadPath = `./public/images/Gallery/${fileName}`;
      await file.mv(uploadPath);

      // Simpan ke database
      const newGallery = await Gallery.create({
        foto: fileName,
        id_destinasi: id_destinasi,
      });

      uploadedFiles.push(newGallery);
    }

    res.status(201).json({
      msg: `${uploadedFiles.length} files uploaded successfully`,
      data: uploadedFiles,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};



export const getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findAll({
      include: [
        {
          model: Destinasi,
          as: "destinasi",
          attributes: ["id", "paket", "lokasi", "harga", "keterangan"],
        },
      ],
    });
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


export const getGalleryByDestinasi = async (req, res) => {
  try {
    const galleries = await Gallery.findAll({
      where: { id_destinasi: req.params.id_destinasi }, // Ambil berdasarkan id_destinasi
      include: [
        {
          model: Destinasi,
          as: "destinasi",
          attributes: ["id", "paket", "lokasi", "harga", "keterangan"],
        },
      ],
    });

    if (!galleries.length) {
      return res.status(404).json({ msg: "Gallery untuk destinasi ini tidak ditemukan" });
    }

    res.status(200).json({
      msg: `Gallery untuk Destinasi ID ${req.params.id_destinasi}`,
      data: galleries,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

