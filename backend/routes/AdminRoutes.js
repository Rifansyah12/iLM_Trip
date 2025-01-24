import express from 'express';
import { createAdmin, getAdmin, loginAdmin } from '../controllers/AdminControllers.js';
import { verifyToken } from '../middlewares/AuthMiddleware.js';


const route = express.Router();

route.post('/createAdmin', createAdmin);
route.post('/loginAdmin', loginAdmin);
route.get('/getAdmin', verifyToken,getAdmin);


export default route;