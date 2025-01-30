import PrivateTrip from "./PrivatTripModels.js";
import MountainTrip from "./LayananMountainTrip.js";
import Destinasi from "./DestinasiModels.js";

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
  as: "Destinasi",
});

Destinasi.belongsTo(MountainTrip, {
  foreignKey: "id_layanan",
  as: "mountainTrip"
});


// inisialisasi relasi  private trip dan Destinasi

PrivateTrip.hasMany(Destinasi,{
  foreignKey: "id_privatetrip",
  as: "Destinasi",
  
});

Destinasi.belongsTo(PrivateTrip,{
  foreignKey: "id_privatetrip",
  as: "privatetrip"
})

// Pastikan file ini di-import di entry point
export default () => {
  console.log("Relasi antar model berhasil diinisialisasi.");
};
