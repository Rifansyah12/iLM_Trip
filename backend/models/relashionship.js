import PrivateTrip from "./PrivatTripModels.js";
import MountainTrip from "./LayananMountainTrip.js";

// Inisialisasi relasi
MountainTrip.hasMany(PrivateTrip, { 
  foreignKey: "id_layanan", 
  as: "privateTrips" 
});

PrivateTrip.belongsTo(MountainTrip, { 
  foreignKey: "id_layanan", 
  as: "mountainTrip" 
});

// Pastikan file ini di-import di entry point
export default () => {
  console.log("Relasi antar model berhasil diinisialisasi.");
};
