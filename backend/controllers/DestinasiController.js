import Destinasi from "../models/DestinasiModels.js";


import path, { sep } from 'path';
import fs from 'fs';


export const createDestinasi = async(req, res)=>{
  if(req.files === null) return res.status(400).json({msg: "No file Uploaded"});
  const nama_gunung = req.body.nama_gunung;
  const file = req.files.foto_gunung;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;

  const allowedType = ['.png', '.jpg', '.jpeg'];
  if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json("Invalid Images");
  if(fileSize > 5000000) return res.status(422).json({msg: "file anda terlalu besar gunakan file ddibawah 5mb"});

  file.mv(`./public/images/Destinasi/${fileName}`, async(err)=> {
    if(err) return res.status(500).json({msg: err.message});
    const {deskripsi_gunung, harga_tiket} = req.body;
  
    
    try {

     
      
      await Destinasi.create({
        nama_gunung: nama_gunung,
        deskripsi_gunung: deskripsi_gunung,
        foto_gunung: fileName,
        
        harga_tiket: harga_tiket,
        


      });
      
      res.status(201).json({msg: "Data Berhasil Ditambahkah"});
    } catch (error) {
      console.log(error.message);
      
    }


  });
}


export const getDestinasi = async(req, res)=>{
  try {
    const response = await Destinasi.findAll({
      attributes: ['id', 'nama_gunung', 'deskripsi_gunung', 'foto_gunung'],

    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    
  }
}


export const updateDestinasi = async(req, res)=> {
  try {
    const destinasi = await Destinasi.findOne({
      where:{
        id: req.params.id
      }
    });

    if(!destinasi) res.status(404).json({msg: "Data Destinasi tidak ditemukan"});

    let fileName;
    if(!req.files || !req.files.foto_gunung){
      fileName = Destinasi.foto_gunung;
    }else{
      const file = req.files.foto_gunung;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext ;
      const allowedType = ['.png', '.jpg', '.jpeg'];

      if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json({msg: "Gambar Tidak Valid"});
      if(fileSize > 5000000) return res.status(422).json({msg: "Gambar Harus Kurang dari 5 mb"});
      const oldFilePath = `./public/images/destinasi/${destinasi.foto_gunung}`;
      const newFilePath = `./public/images/destinasi/${fileName}`;

      // Hapus file gambar lama
      if(fs.existsSync(oldFilePath)){
        fs.unlink(oldFilePath, (err)=>{
          if(err) return res.status(500).json({msg: err.message});

        });
      }

      // simpan file gambar baru 
      file.mv(newFilePath, (err)=> {
        if(err) return res.status(500).json({msg: err.message});
      })
    }
    

    const {nama_gunung, deskripsi_gunung, harga_gunung} = req.body;
    


    await Destinasi.update({
      nama_gunung: nama_gunung,
      deskripsi_gunung: deskripsi_gunung,
      foto_gunung: fileName,
      harga_gunung: harga_gunung
    }, {
      where:{
        id: req.params.id
      }
    });

    res.status(200).json({msg: "Data Berhasil Diperbarui"});

  } catch (error) {
    console.log(error.message);
    res.status(500).json({msg: "Kesalahan Server"})
  }
}

