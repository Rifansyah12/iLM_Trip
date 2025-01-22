import express from "express";

import { createDestinasi, getDestinasi, updateDestinasi } from "../controllers/DestinasiController.js";

const route = express.Router();

route.post('/createDestinasi', createDestinasi);
route.put('/updateDestinasi/:id', updateDestinasi);
route.get('/getDestinasi', getDestinasi);



export default route;