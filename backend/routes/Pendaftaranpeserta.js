import express from "express";

<<<<<<< HEAD
import { createPendaftaranPeserta, getPendaftaranPeserta, updateStatusPendaftaran, getPendaftaranPesertaById } from "../controllers/PendaftaranpesertaController.js";

const route = express.Router();

route.post('/createPendaftaran/:id_destinasi', createPendaftaranPeserta);
route.get('/getPendaftaranpeserta', getPendaftaranPeserta)
route.put('/updateStatus/:id', updateStatusPendaftaran);
route.get('/getPendaftaranById/:id', getPendaftaranPesertaById);
=======
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
>>>>>>> bakcup-commit-aa265d6

export default route;
