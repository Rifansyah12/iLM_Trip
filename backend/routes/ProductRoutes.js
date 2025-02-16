import express from "express";
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// ✅ Route untuk mendapatkan semua produk
router.get("/product", getProduct);

// ✅ Route untuk menambahkan produk baru (dengan upload file)
router.post("/product", createProduct);

// ✅ Route untuk mengupdate produk berdasarkan ID
router.put("/product/:id", updateProduct);

// ✅ Route untuk menghapus produk berdasarkan ID
router.delete("/product/:id", deleteProduct);

export default router;
