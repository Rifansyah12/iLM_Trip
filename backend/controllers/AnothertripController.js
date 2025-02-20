import Anothertrip from "../models/AnothertripModels.js";
import path from "path";
import fs from "fs";

export const createAnothertrip = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No file Uploaded" });
  const nama_layanan = req.body.nama_layanan;
  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const allowedType = [".png", ".jpg", ".jpeg"];
  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json("Invalid Images");
  if (fileSize > 50000000)
    return res
      .status(422)
      .json({ msg: "file anda terlalu besar gunakan file dibawah 5mb" });
  file.mv(`./public/images/anothertrip/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    const {
      harga,
      keterangan_layanan,
      deskripsi_layanan,
      lokasi,
      keterangan_singkat,
    } = req.body;

    try {
      await Anothertrip.create({
        nama_layanan: nama_layanan,
        harga: harga,
        foto: fileName,
        keterangan_layanan: keterangan_layanan,
        deskripsi_layanan: deskripsi_layanan,
        lokasi: lokasi,
        keterangan_singkat: keterangan_singkat,
      });

      res.status(201).json({ msg: "Layanan telah ditambahkan" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const getAnothertrip = async (req, res) => {
  try {
    const response = await Anothertrip.findAll({
      attributes: [
        "id",
        "nama_layanan",
        "harga",
        "foto",
        "keterangan_layanan",
        "deskripsi_layanan",
        "lokasi",
        "keterangan_singkat",
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAnothertrip = async (req, res) => {
  try {
    const anotherTrip = await Anothertrip.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!anotherTrip) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    let fileName = anotherTrip.foto; // Gunakan foto lama jika tidak ada foto baru
    if (req.files && req.files.foto) {
      const file = req.files.foto;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];

      if (!allowedType.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: "Gambar Tidak Valid" });
      }
      if (fileSize > 50000000) {
        return res.status(422).json({ msg: "Gambar Harus kurang dari 5 MB" });
      }

      const oldFilePath = `./public/images/anothertrip/${anotherTrip.foto}`;
      const newFilePath = `./public/images/anothertrip/${fileName}`;

      // Hapus file lama jika ada
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }

      // Simpan file gambar baru
      if (!fs.existsSync("./public/images/anothertrip")) {
        fs.mkdirSync("./public/images/anothertrip", { recursive: true });
      }

      file.mv(newFilePath, (err) => {
        if (err) {
          return res.status(500).json({ msg: "Gagal menyimpan gambar" });
        }
      });
    }

    const {
      nama_layanan,
      harga,
      keterangan_layanan,
      deskripsi_layanan,
      lokasi,
      keterangan_singkat,
    } = req.body;

    await Anothertrip.update(
      {
        nama_layanan,
        harga,
        foto: fileName,
        keterangan_layanan: keterangan_layanan,
        deskripsi_layanan: deskripsi_layanan,
        lokasi: lokasi,
        keterangan_singkat: keterangan_singkat,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({ msg: "layanan berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteAnothertrip = async (req, res) => {
  const anotherTrip = await Anothertrip.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!anotherTrip)
    return res.status(404).json({ msg: "Data Destinasi tidak di temukan" });

  try {
    const filePath = `./public/images/anothertrip/${anotherTrip.foto}`;
    fs.unlinkSync(filePath);

    await anotherTrip.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ msg: "Data sukses dihapus" });
  } catch (error) {
    console.log(error);
  }
};

export const getAnothertripById = async (req, res) => {
  try {
    const response = await Anothertrip.findOne({
      where: { id: req.params.id },
      attributes: [
        "id",
        "nama_layanan",
        "harga",
        "foto",
        "keterangan_layanan",
        "deskripsi_layanan",
        "lokasi",
        "keterangan_singkat",
      ],
    });

    if (!response) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};
