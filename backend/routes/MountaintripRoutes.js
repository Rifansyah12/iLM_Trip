import express from 'express';
import { createMountaintrip, getMountaintrip, updateMountaintrip } from "../controllers/MountaintripControllers.js";

const route = express.Router();

route.post('/createMountrip', createMountaintrip);
route.put('/updateMountaintrip/:id', updateMountaintrip);
route.get('/getMountaintrip', getMountaintrip);
export default route;