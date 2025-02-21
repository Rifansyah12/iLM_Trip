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

export default route;
