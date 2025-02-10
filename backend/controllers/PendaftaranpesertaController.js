import path from "path";
import fs from "fs";
import crypto from "crypto";
import PendaftaranPeserta from "../models/PendaftaranpesertaModels.js";
import Destinasi from "../models/DestinasiModels.js";
import moment from "moment";

export const createPendaftaranPeserta = async (req, res) => {
  if (!req.files || !req.files.fotoKtp)
    return res.status(400).json({ msg: "No file uploaded" });

  const file = req.files.fotoKtp;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileHash = crypto.createHash("md5").update(file.data).digest("hex");
  const fileName = `${fileHash}${ext}`;
  const filePath = `./public/images/fotoKtp/${fileName}`;

  const allowedTypes = [".png", ".jpg", ".jpeg"];
  if (!allowedTypes.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid image format" });

  if (fileSize > 5000000)
    return res.status(422).json({ msg: "File terlalu besar, maksimal 5MB" });

  try {
    // Periksa apakah id_destinasi valid
    const destinasi = await Destinasi.findOne({
      where: { id: req.params.id_destinasi },
    });

    if (!destinasi) {
      return res.status(404).json({ msg: "Destinasi tidak ditemukan" });
    }

    // Simpan file foto KTP ke folder
    file.mv(filePath, async (err) => {
      if (err) return res.status(500).json({ msg: err.message });

      const {
        nama_lengkap,
        email,
        alamat_lengkapi,
        domisili,
        nomer_telepon,
        nomertelp_darurat,
        pekerjaan,
        paket,
        fasilitas,
        meetingPoint,
        keterangan,
        kesehatan,
      } = req.body;

      const tanggal = moment().format("YYYY-MM-DD HH:mm:ss"); // Set default tanggal saat ini

      try {
        await PendaftaranPeserta.create({
          nama_lengkap,
          email,
          alamat_lengkapi,
          domisili,
          nomer_telepon,
          nomertelp_darurat,
          pekerjaan,
          tanggal, // Gunakan tanggal default
          paket,
          fasilitas,
          meetingPoint,
          keterangan,
          kesehatan,
          status: "Belum Disetujui", // Status default
          fotoKtp: fileName,
          id_destinasi: destinasi.id,
        });

        res.status(201).json({ msg: "Pendaftaran berhasil ditambahkan" });
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan server" });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};

export const getPendaftaranPeserta = async (req, res) => {
  try {
    const pendaftaran = await PendaftaranPeserta.findAll({
      include: [
        {
          model: Destinasi,
          as: "destinasi",
          attributes: ["id", "nama_gunung", "lokasi", "keterangan"], // Pilih atribut yang ingin ditampilkan
        },
      ],
    });

    res.status(200).json(pendaftaran);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};
