<<<<<<< HEAD
import express from "express";
import {
  createAnothertrip,
  getAnothertrip,
  updateAnothertrip,
  deleteAnothertrip,
  getAnothertripById,
} from "../controllers/AnothertripController.js";

const route = express.Router();

route.post("/createAnothertrip", createAnothertrip);
route.get("/getAnothertrip", getAnothertrip);
route.get("/getAnothertripById/:id", getAnothertripById);
route.put("/updateAnothertrip/:id", updateAnothertrip);
route.delete("/deleteAnothertrip/:id", deleteAnothertrip);
=======
import express from 'express';
import { createAnothertrip, getAnothertrip, updateAnothertrip, deleteAnothertrip, getAnothertripById } from '../controllers/AnothertripController.js';


const route = express.Router();

route.post('/createAnothertrip', createAnothertrip);
route.get('/getAnothertrip', getAnothertrip)
route.get('/getAnothertripById/:id', getAnothertripById)
route.put('/updateAnothertrip/:id', updateAnothertrip)
route.delete('/deleteAnothertrip/:id', deleteAnothertrip);
>>>>>>> 669af1f89099e17be35d75fa90fe6a9f9d2bf573

export default route;
