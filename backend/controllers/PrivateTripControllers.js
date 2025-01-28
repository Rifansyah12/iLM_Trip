import PrivateTrip from "../models/PrivatTripModels.js";
import MountainTrip from "../models/LayananMountainTrip.js";
import path from "path";

export const createPrivatetrip = async(req, res)=> {
  if(req.files === null) return res.status(400).json({msg: "No file Uploaded"});
  const nama_paket = req.body.nama_paket;
  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const allowedType = ['.png', '.jpg', '.jpeg'];
  if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json("Invalide Images");
  if(fileSize > 50000000) return res.status(422).json({msg: "file anda terlalu besar gunakan file dibawah 5 mb"});
  file.mv(`./public/images/privatetrip/${fileName}`, async(err)=>{
    if(err) return res.status(500).json({msg: err.message});
    const {harga_paket} = req.body;

    try {
     const layanan = await MountainTrip.findOne({
      where:{
        id:req.params.id
      }
     })

     if(!layanan) return res.status(422).json({msg: "Layanan Tidak ditemukan"});
      await PrivateTrip.create({
        nama_paket: nama_paket,
        harga_paket: harga_paket,
        foto: fileName,
        id_layanan: layanan.id,
      });
      res.status(201).json({msg: "Paket telah ditambahkan"});
    } catch (error) {
      console.log(error.message);
    }

  })
}

export const getPrivatetrip = async(req, res)=>{
  try{
    const response = await PrivateTrip.findAll({
      attributes: ['id', 'nama_paket', 'harga_paket', 'foto'],
      include:[
        {
          model: MountainTrip,
          as: 'mountainTrip',
          attributes: ['id', 'nama_layanan', 'deskripsi_layanan', 'foto']
        },
      ],
    });

   
    res.status(200).json({msg: response})
  }catch (error){
console.log(error)
  }
}