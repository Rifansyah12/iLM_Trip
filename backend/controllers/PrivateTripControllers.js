import PrivateTrip from "../models/PrivatTripModels.js";
import MountainTrip from "../models/LayananMountainTrip.js";
import path from "path";
import fs from "fs";

export const createPrivatetrip = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No file Uploaded" });
  const nama_paket = req.body.nama_paket;
  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const allowedType = [".png", ".jpg", ".jpeg"];
  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json("Invalide Images");
  if (fileSize > 50000000)
    return res
      .status(422)
      .json({ msg: "file anda terlalu besar gunakan file dibawah 5 mb" });
  file.mv(`./public/images/privatetrip/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    const { harga_paket } = req.body;

    try {
      const layanan = await MountainTrip.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!layanan)
        return res.status(422).json({ msg: "Layanan Tidak ditemukan" });
      await PrivateTrip.create({
        nama_paket: nama_paket,
        harga_paket: harga_paket,
        foto: fileName,
        id_layanan: layanan.id,
      });
      res.status(201).json({ msg: "Paket telah ditambahkan" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const getPrivatetrip = async (req, res) => {
  try {
    const response = await PrivateTrip.findAll({
      attributes: ["id", "nama_paket", "harga_paket", "foto"],
      include: [
        {
          model: MountainTrip,
          as: "mountainTrip",
          attributes: ["id", "nama_layanan", "deskripsi_layanan", "foto"],
        },
      ],
    });

    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
  }
};

export const getPrivatetripById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await PrivateTrip.findOne({
      where: { id },
      attributes: ["id", "nama_paket", "harga_paket", "foto"],
      include: [
        {
          model: MountainTrip,
          as: "mountainTrip",
          attributes: ["id", "nama_layanan", "deskripsi_layanan", "foto"],
        },
      ],
    });

    if (!response) {
      return res.status(404).json({ msg: "Data Tidak Ditemukan" });
    }
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ msg: "Data tidak ditemukan" });
  }
};

export const updatePrivatetrip = async (req, res) => {
  try {
    const Privatetrip = await PrivateTrip.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!Privatetrip) res.status(404).json({ msg: "Data Tidak ditemukan" });

    let fileName;
    if (!req.files || !req.files.foto) {
      fileName = Privatetrip.foto;
    } else {
      const file = req.files.foto;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];

      if (!allowedType.includes(ext.toLocaleLowerCase()))
        return res.status(422).json({ msg: "Gambar Tidak valid" });
      if (fileSize > 50000000)
        return res.status(422).json({ msg: "Gambar harus kurang dari 5 mb" });

      const oldFilePath = `./public/images/privatetrip/${Privatetrip.foto}`;
      const newFilePath = `./public/images/privatetrip/${fileName}`;

      // hapus file gambar lama
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

    const { nama_paket, harga_paket, id_layanan } = req.body;

    await PrivateTrip.update(
      {
        nama_paket: nama_paket,
        harga_paket: harga_paket,
        foto: fileName,
        id_layanan: id_layanan,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({ msg: "Data Berhasil diperbarui" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Kesalahan server" });
  }
};

export const deletePrivatetrip = async (req, res) => {
  const trip = await PrivateTrip.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!trip) return res.status(404).json({ msg: "Data Tidak ditemukan" });

  try {
    const filePath = `./public/images/privatetrip/${trip.foto}`;
    fs.unlinkSync(filePath);

    await trip.destroy();

    res.status(200).json({ msg: "Data Sukses dihapus" });
  } catch (error) {
    res.status(500).json({ msg: "Invalid Errror" });
  }
};
