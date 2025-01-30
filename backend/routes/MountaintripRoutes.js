// kombinasi controller LayananMountaintrip dan PrivateTrip

import express from 'express';
import { createMountaintrip, getMountaintrip, updateMountaintrip, getMountaintripById, deleteMountaintrip } from "../controllers/MountaintripControllers.js";
import { createPrivatetrip, getPrivatetrip, getPrivatetripById, updatePrivatetrip, deletePrivatetrip} from '../controllers/PrivateTripControllers.js';

const route = express.Router();

// MountainTrip
route.post('/createMountrip', createMountaintrip);
route.put('/updateMountaintrip/:id', updateMountaintrip);
route.get('/getMountaintrip', getMountaintrip);
route.get('/Mountaintrip/:id', getMountaintripById);
route.delete('/deleteMountaintrip/:id', deleteMountaintrip)


// privateTrip
route.post('/createPrivatetrip/:id', createPrivatetrip);
route.get('/getPrivatetrip', getPrivatetrip);
route.get('/getPrivatetripId/:id', getPrivatetripById);
route.put('/updatePrivatetrip/:id', updatePrivatetrip)
route.delete('/deletePrivatetrip/:id', deletePrivatetrip);

export default route;