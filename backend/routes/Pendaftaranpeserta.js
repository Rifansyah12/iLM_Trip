import express from "express";

import {
  createPendaftaranPeserta,
  getPendaftaranPeserta,
} from "../controllers/PendaftaranpesertaController.js, updateStatusPeserta";

const route = express.Router();

route.post("/createPendaftaran/:id_destinasi", createPendaftaranPeserta);
route.get("/getPendaftaranpeserta", getPendaftaranPeserta);

// Tambahkan route untuk update status
route.post("/updateStatusPeserta/:id_destinasi", updateStatusPeserta);

export default route;
