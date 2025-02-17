import PrivateTrip from "./PrivatTripModels.js";
import MountainTrip from "./LayananMountainTrip.js";
import Destinasi from "./DestinasiModels.js";
import PendaftaranPeserta from "./PendaftaranpesertaModels.js";
import Gallery from "./GaleriPerjalananModels.js";
import Anothertrip from "./AnothertripModels.js";

// Inisialisasi relasi
MountainTrip.hasMany(PrivateTrip, { 
  foreignKey: "id_layanan", 
  as: "privateTrips" 
});

PrivateTrip.belongsTo(MountainTrip, { 
  foreignKey: "id_layanan", 
  as: "mountainTrip" 
});


// inisialisasi relasi mountain trip dan destinasi


MountainTrip.hasMany(Destinasi, {
  foreignKey: "id_layanan",
  as: "mountaintrip",
});

Destinasi.belongsTo(MountainTrip, {
  foreignKey: "id_layanan",
  as: "mountaintrip"
});


// inisialisasi relasi  private trip dan Destinasi

PrivateTrip.hasMany(Destinasi,{
  foreignKey: "id_privatetrip",
  as: "privatetrip",
  
});

Destinasi.belongsTo(PrivateTrip,{
  foreignKey: "id_privatetrip",
  as: "privatetrip"
})

// relasi destinasi dan paket pendaftaran
// Relasi Destinasi dan PendaftaranPeserta
Destinasi.hasMany(PendaftaranPeserta, {
  foreignKey: "id_destinasi",
  as: "pendaftaran_peserta",
});

PendaftaranPeserta.belongsTo(Destinasi, {
  foreignKey: "id_destinasi",
  as: "destinasi",
});
// Relasi Destinasi dan PendaftaranPeserta
Anothertrip.hasMany(PendaftaranPeserta, {
  foreignKey: "id_anothertrip",
  as: "pendaftaran_peserta",
});

PendaftaranPeserta.belongsTo(Anothertrip, {
  foreignKey: "id_anothertrip",
  as: "anothertrip",
});

// Relasi Destinasi dan Gallery
Destinasi.hasMany(Gallery, {
  foreignKey: "id_destinasi",
  as: "gallery",
});

Gallery.belongsTo(Destinasi, {
  foreignKey: "id_destinasi",
  as: "destinasi",
});

// Pastikan file ini di-import di entry point
export default () => {
  console.log("Relasi antar model berhasil diinisialisasi.");
};
