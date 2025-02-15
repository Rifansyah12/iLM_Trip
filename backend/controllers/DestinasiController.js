import Destinasi from "../models/DestinasiModels.js";

import path from "path";
import fs from "fs";
import PrivateTrip from "../models/PrivatTripModels.js";
import MountainTrip from "../models/LayananMountainTrip.js";

export const createDestinasi = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No file Uploaded" });
  const nama_gunung = req.body.nama_gunung;
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
      .json({ msg: "file anda terlalu besar gunakan file ddibawah 5mb" });

  file.mv(`./public/images/Destinasi/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    const { paket, lokasi, harga, keterangan, deskripsi } = req.body;

    try {
      const Privatetrip = req.params.id_private
        ? await PrivateTrip.findOne({ where: { id: req.params.id_private } })
        : null;

      const Mountaintrip = await MountainTrip.findOne({
        where: {
          id: req.params.id_layanan,
        },
      });

      if (!Mountaintrip) {
        return res
          .status(404)
          .json({ msg: "Data untuk id_layanan tidak ditemukan" });
      }

      const idPrivateTrip = Privatetrip ? Privatetrip.id : null; // Jika tidak ada, set null

      await Destinasi.create({
        paket: paket,
        nama_gunung: nama_gunung,
        lokasi: lokasi,
        harga: harga,
        foto: fileName,
        keterangan: keterangan,
        deskripsi: deskripsi,
        id_layanan: Mountaintrip.id,
        id_privatetrip: idPrivateTrip,
      });

      res.status(201).json({ msg: "Data Berhasil Ditambahkah" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const getDestinasi = async (req, res) => {
  try {
    const response = await Destinasi.findAll({
      include: [
        {
          model: PrivateTrip,
          as: "privatetrip",
          attributes: ["id", "nama_paket", "harga_paket", "foto"],
        },
        {
          model: MountainTrip,
          as: "mountaintrip",
          attributes: ["id", "nama_layanan", "deskripsi_layanan", "foto"],
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDestinasi = async (req, res) => {
  try {
    const destinasi = await Destinasi.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!destinasi)
      res.status(404).json({ msg: "Data Destinasi tidak ditemukan" });

    let fileName;

    if (!req.files || !req.files.foto_gunung) {
      fileName = Destinasi.foto_gunung;
    } else {
      const file = req.files.foto_gunung;

      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];

      if (!allowedType.includes(ext.toLocaleLowerCase()))
        return res.status(422).json({ msg: "Gambar Tidak Valid" });

      if (fileSize > 50000000)
        return res.status(422).json({ msg: "Gambar Harus Kurang dari 5 mb" });
      const oldFilePath = `./public/images/destinasi/${destinasi.foto}`;

      const newFilePath = `./public/images/destinasi/${fileName}`;

      // Hapus file gambar lama
      if (fs.existsSync(oldFilePath)) {
        fs.unlink(oldFilePath, (err) => {
          if (err) return res.status(500).json({ msg: err.message });
        });
      }

      // simpan file gambar baru
      file.mv(newFilePath, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
    }

    const { paket, nama_gunung, lokasi, harga, keterangan, deskripsi } =
      req.body;
    const id_layanan = req.body.id_layanan
      ? parseInt(req.body.id_layanan)
      : null;
    const id_privatetrip = req.body.id_privatetrip
      ? parseInt(req.body.id_privatetrip)
      : null;

    await Destinasi.update(
      {
        paket: paket,
        nama_gunung: nama_gunung,
        lokasi: lokasi,
        harga: harga,
        foto: fileName,
        keterangan: keterangan,
        deskripsi: deskripsi,
        id_layanan: id_layanan,
        id_privatetrip: id_privatetrip,
      },
      {
        where: {
          id: destinasi.id,
        },
      }
    );

    res.status(200).json({ msg: "Data Berhasil Diperbarui" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Kesalahan Server" });
  }
};

export const deleteDestinasi = async (req, res) => {
  const destinasi = await Destinasi.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!destinasi)
    return res.status(404).json({ msg: "Data Destinasi tidak di temukan" });

  try {
    const filePath = `./public/images/destinasi/${destinasi.foto}`;
    fs.unlinkSync(filePath);

    await destinasi.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ msg: "Data sukses dihapus" });
  } catch (error) {
    console.log(error);
  }
};

export const getDestinasiByIdLayanan = async (req, res) => {
  try {
    const { id_layanan } = req.params;

    const response = await Destinasi.findAll({
      where: { id_layanan },

      include: [
        {
          model: PrivateTrip,
          as: "privatetrip",
          attributes: ["id", "nama_paket", "harga_paket", "foto"],
        },
        {
          model: MountainTrip,
          as: "mountaintrip",
          attributes: ["id", "nama_layanan", "deskripsi_layanan", "foto"],
        },
      ],
    });

    if (response.length === 0) {
      return res.status(404).json({ message: "Destinasi Tidak ditemukan" });
    }

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};
export const getDestinasiByIdPrivate = async (req, res) => {
  try {
    const { id_privatetrip } = req.params;

    const response = await Destinasi.findAll({
      where: { id_privatetrip },

      include: [
        {
          model: PrivateTrip,
          as: "privatetrip",
          attributes: ["id", "nama_paket", "harga_paket", "foto"],
        },
        {
          model: MountainTrip,
          as: "mountaintrip",
          attributes: ["id", "nama_layanan", "deskripsi_layanan", "foto"],
        },
      ],
    });

    if (response.length === 0) {
      return res.status(404).json({ message: "Destinasi Tidak ditemukan" });
    }

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

export const getDestinasiById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Konversi id ke integer
    if (isNaN(id)) {
      return res.status(400).json({ msg: "ID harus berupa angka" });
    }

    const response = await Destinasi.findOne({
      attributes: [
        "id",
        "paket",
        "nama_gunung",
        "lokasi",
        "harga",
        "foto",
        "keterangan",
        "deskripsi",
        "id_layanan",
        "id_privatetrip",
      ],
      where: { id: id },
    });

    if (!response) {
      return res.status(404).json({ msg: "Destinasi Tidak ditemukan" });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};
