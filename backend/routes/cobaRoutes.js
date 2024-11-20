import express from 'express';
import { createCoba } from '../controllers/cobaController.js';
import fileUpload from 'express-fileupload'; // Middleware untuk upload file

const router = express.Router();

// Gunakan express-fileupload untuk menangani file upload
router.use(fileUpload());

// Route untuk menambah data Coba
router.post('/add', createCoba);

export default router;
