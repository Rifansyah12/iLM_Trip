import express from "express";

import { createPendaftaranPeserta, getPendaftaranPeserta, updateStatusPendaftaran, getPendaftaranPesertaById } from "../controllers/PendaftaranpesertaController.js";

const route = express.Router();

route.post('/createPendaftaran/:id_destinasi', createPendaftaranPeserta);
route.get('/getPendaftaranpeserta', getPendaftaranPeserta)
route.put('/updateStatus/:id', updateStatusPendaftaran);
route.get('/getPendaftaranById/:id', getPendaftaranPesertaById);


export default route;