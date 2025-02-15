import express from "express";

import { createDestinasi, getDestinasi, updateDestinasi, deleteDestinasi, getDestinasiByIdLayanan, getDestinasiByIdPrivate, getDestinasiById } from "../controllers/DestinasiController.js";
import { createGallery, getGallery, getGalleryByDestinasi } from "../controllers/GalleryController.js";

const route = express.Router();

route.post('/createDestinasi/:id_layanan/:id_private?', createDestinasi);
route.put('/updateDestinasi/:id', updateDestinasi);
route.delete('/deleteDestinasi/:id', deleteDestinasi)
route.get('/getDestinasi', getDestinasi);
route.get('/getDestinasiByIdMountrip/:id_layanan', getDestinasiByIdLayanan)
route.get('/getDestinasiByIdPrivate/:id_privatetrip', getDestinasiByIdPrivate)
route.get('/getDestinasiById/:id', getDestinasiById)



// Gellery Perjalanan
route.post('/createGallery', createGallery);
route.get('/getGallery', getGallery);
route.get('/getGelleryByIdDestinasi/:id_destinasi', getGalleryByDestinasi)

export default route;