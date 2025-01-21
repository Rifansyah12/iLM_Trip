import express from "express";

import { createDestinasi } from "../controllers/DestinasiController.js";

const route = express.Router();

route.post('/createDestinasi', createDestinasi);



export default route;