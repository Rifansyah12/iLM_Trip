import express from "express";

import { createPendaftaranPeserta, getPendaftaranPeserta } from "../controllers/PendaftaranpesertaController.js";

const route = express.Router();

route.post('/createPendaftaran/:id_destinasi', createPendaftaranPeserta);
route.get('/getPendaftaranpeserta', getPendaftaranPeserta)


export default route;