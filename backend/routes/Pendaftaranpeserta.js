import express from "express";

import {
  createPendaftaranPeserta,
  getPendaftaranPeserta,
  updateStatusPeserta,
  deletePendaftaranPeserta,
} from "../controllers/PendaftaranpesertaController.js";

const route = express.Router();

route.post("/createPendaftaran/:id_destinasi", createPendaftaranPeserta);
route.get("/getPendaftaranpeserta", getPendaftaranPeserta);
route.put("/updateStatusPeserta/:id", updateStatusPeserta);
route.delete("/deletePeserta/:id", deletePendaftaranPeserta);

export default route;
