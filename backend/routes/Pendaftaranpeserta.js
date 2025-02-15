import express from "express";
import {
  createPendaftaranPeserta,
  getPendaftaranPeserta,
  updateStatusPendaftaran, // Menggunakan nama yang lebih sesuai
  deletePendaftaranPeserta,
  getPendaftaranPesertaById,
} from "../controllers/PendaftaranpesertaController.js";

const route = express.Router();

route.post("/createPendaftaran", createPendaftaranPeserta);
route.get("/getPendaftaranpeserta", getPendaftaranPeserta);
route.get("/getPendaftaranById/:id", getPendaftaranPesertaById);
route.put("/updateStatus/:id", updateStatusPendaftaran); // Sesuai dengan nama di controller
route.delete("/deletePeserta/:id", deletePendaftaranPeserta);

export default route;
