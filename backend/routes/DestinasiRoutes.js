import express from "express";

import { createDestinasi, getDestinasi, updateDestinasi, deleteDestinasi, getDestinasiByIdLayanan } from "../controllers/DestinasiController.js";

const route = express.Router();

route.post('/createDestinasi/:id_layanan/:id_private?', createDestinasi);
route.put('/updateDestinasi/:id', updateDestinasi);
route.delete('/deleteDestinasi/:id', deleteDestinasi)
route.get('/getDestinasi', getDestinasi);
route.get('/getDestinasiByIdMountrip/:id_layanan', getDestinasiByIdLayanan)



export default route;