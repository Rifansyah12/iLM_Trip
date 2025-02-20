import express from "express";
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/getProduct", getProduct);
router.post("/createProduct", createProduct);

// ✅ Route untuk mengupdate produk berdasarkan ID
router.put("/updateProduct/:id", updateProduct);

// ✅ Route untuk menghapus produk berdasarkan ID
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
