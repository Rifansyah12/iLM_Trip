import MountainTrip from "../models/LayananMountainTrip.js"
import path from "path";
import fs from "fs";

export const createMountaintrip = async(req, res)=>{
  if(req.files === null) return res.status(400).json({msg: "No file Uploaded"});
  const nama_layanan = req.body.nama_layanan;
  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const allowedType = ['.png', '.jpg', '.jpeg'];
  if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json("Invalid Images");
  if(fileSize > 50000000) return res.status(422).json({msg: "file anda terlalu besar gunakan file dibawah 5mb"});
  file.mv(`./public/images/mountaintrip/${fileName}`, async(err)=> {
    if(err) return res.status(500).json({msg: err.message});
    const {deskripsi_layanan} = req.body;
    
    try {
      await MountainTrip.create({
        nama_layanan: nama_layanan,
        deskripsi_layanan: deskripsi_layanan,
        foto: fileName,
      });

      res.status(201).json({msg: "Produk telah ditambahkan"});
    } catch (error) {
      console.log(error.message);
    }
  });

}


export const getMountaintripById = async(req, res)=>{
  const response = await MountainTrip.findOne({
    attributes: ['id', 'nama_layanan', 'deskripsi_layanan', 'foto'],
    where:{
      id: req.params.id
    }
  });

  if(!response) res.status(404).json({msg: "Data tidak ditemukan"});

  res.status(200).json(response);
}



export const getMountaintrip = async(req, res)=>{
  try {
    const response = await MountainTrip.findAll({
      attributes: ['id', 'nama_layanan', 'deskripsi_layanan', 'foto'],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }

}




export const updateMountaintrip = async (req, res) => {
  try {
    const Mountaintrip = await MountainTrip.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!Mountaintrip) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    let fileName = Mountaintrip.foto; // Gunakan foto lama jika tidak ada foto baru
    if (req.files && req.files.foto) {
      const file = req.files.foto;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = ['.png', '.jpg', '.jpeg'];

      if (!allowedType.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: "Gambar Tidak Valid" });
      }
      if (fileSize > 50000000) {
        return res.status(422).json({ msg: "Gambar Harus kurang dari 5 MB" });
      }

      const oldFilePath = `./public/images/mountaintrip/${MountainTrip.foto}`;
      const newFilePath = `./public/images/mountaintrip/${fileName}`;

      // Hapus file lama jika ada
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }

      // Simpan file gambar baru
      if (!fs.existsSync('./public/images/mountaintrip')) {
        fs.mkdirSync('./public/images/mountaintrip', { recursive: true });
      }

      file.mv(newFilePath, (err) => {
        if (err) {
          return res.status(500).json({ msg: "Gagal menyimpan gambar" });
        }
      });
    }

    const { nama_layanan, deskripsi_layanan } = req.body;

    await MountainTrip.update(
      {
        nama_layanan,
        deskripsi_layanan,
        foto: fileName,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({ msg: "Data berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};



export const deleteMountaintrip = async(req, res)=>{
  const mountaintrip = await MountainTrip.findOne({
    where:{
      id: req.params.id
    }
  });

  if(!mountaintrip) return res.status(404).json({msg: "Data Mountaintrip tidak ditemukan"});
  try {
    const filPath = `./public/images/mountaintrip/${mountaintrip.foto}`;
    fs.unlinkSync(filPath);

    await MountainTrip.destroy({
      where:{
        id: req.params.id
      }
    });

    res.status(200).json({msg: "Data sukses dihapus"});
  } catch (error) {
    console.log(error);
    
  }
}
