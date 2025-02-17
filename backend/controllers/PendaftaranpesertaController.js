import path from "path";
import fs from "fs";
import crypto from "crypto";
import PendaftaranPeserta from "../models/PendaftaranpesertaModels.js";
import Destinasi from "../models/DestinasiModels.js";
import moment from "moment";
import Anothertrip from "../models/AnothertripModels.js";
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
        id_destinasi,
        id_anothertrip, // Tambahkan id_anothertrip
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
          id_destinasi: id_destinasi || null, // Jika kosong, set NULL
          id_anothertrip: id_anothertrip || null, // Jika kosong, set NULL
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
        {
          model: Anothertrip,
          as: "anothertrip",
          attributes: ["id", "nama_layanan", "lokasi", "harga", "foto"], // Pilih atribut yang ingin ditampilkan
        },
      ],
    });

    res.status(200).json(pendaftaran);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};

export const updateStatusPendaftaran = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    // Validasi status yang diperbolehkan
    const validStatuses = ["Disetujui", "Ditolak", "Belum Disetujui"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ msg: "Status tidak valid" });
    }

    // Cari pendaftaran berdasarkan ID
    const pendaftaran = await PendaftaranPeserta.findByPk(id);

    if (!pendaftaran) {
      return res.status(404).json({ msg: "Pendaftaran tidak ditemukan" });
    }

    // Logging status sebelumnya (opsional, untuk debugging)
    console.log(`Status sebelumnya: ${pendaftaran.status}`);

    // Update status pendaftaran
    await pendaftaran.update({ status });

    // Logging status setelah update
    console.log(`Status diperbarui menjadi: ${status}`);

    return res
      .status(200)
      .json({ msg: `Status berhasil diperbarui menjadi ${status}` });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};

export const deletePendaftaranPeserta = async (req, res) => {
  try {
    const { id } = req.params;

    // Mencari peserta berdasarkan ID
    const peserta = await PendaftaranPeserta.findOne({ where: { id } });

    if (!peserta) {
      return res.status(404).json({ msg: "Peserta tidak ditemukan" });
    }

    // Hapus file foto KTP dari server
    const filePath = `./public/images/fotoKtp/${peserta.fotoKtp}`;
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath); // Menghapus file
    }

    // Hapus data peserta dari database
    await PendaftaranPeserta.destroy({ where: { id } });

    res.status(200).json({ msg: "Pendaftaran peserta berhasil dihapus" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};

export const getPendaftaranPesertaById = async (req, res) => {
  try {
    const { id } = req.params;

    const pendaftaran = await PendaftaranPeserta.findOne({
      where: { id },
      include: [
        {
          model: Destinasi,
          as: "destinasi",
          attributes: ["id", "nama_gunung", "lokasi", "keterangan"],
        },
      ],
    });

    if (!pendaftaran) {
      return res.status(404).json({ msg: "Pendaftaran tidak ditemukan" });
    }

    return res.status(200).json(pendaftaran);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};
