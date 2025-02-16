import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

// 🔹 CREATE PRODUCT (Upload File)
export const createProduct = async (req, res) => {
  if (!req.files || !req.files.foto) {
    return res.status(400).json({ msg: "No file Uploaded" });
  }

  const { produk, harga } = req.body;
  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase())) {
    return res.status(422).json({ msg: "Invalid Images" });
  }

  if (fileSize > 5000000) {
    return res
      .status(422)
      .json({ msg: "File terlalu besar, gunakan file di bawah 5MB" });
  }

  file.mv(`./public/images/product/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });

    try {
      await Product.create({
        produk,
        harga,
        foto: fileName,
      });

      res.status(201).json({ msg: "Produk berhasil ditambahkan" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

// 🔹 GET ALL PRODUCT
export const getProduct = async (req, res) => {
  try {
    const response = await Product.findAll({
      attributes: ["id", "produk", "harga", "foto"],
    });

    // Tambahkan URL lengkap untuk gambar
    const modifiedResponse = response.map((item) => ({
      ...item.dataValues,
      foto: `http://localhost:5000/images/product/${item.foto}`,
    }));

    res.status(200).json(modifiedResponse);
  } catch (error) {
    console.log(error.message);
  }
};

// 🔹 UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.id },
    });

    if (!product) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    let fileName = product.foto;
    if (req.files && req.files.foto) {
      const file = req.files.foto;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];

      if (!allowedType.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: "Gambar Tidak Valid" });
      }
      if (fileSize > 5000000) {
        return res.status(422).json({ msg: "Gambar harus kurang dari 5 MB" });
      }

      const oldFilePath = `./public/images/product/${product.foto}`;
      const newFilePath = `./public/images/product/${fileName}`;

      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }

      if (!fs.existsSync("./public/images/product")) {
        fs.mkdirSync("./public/images/product", { recursive: true });
      }

      file.mv(newFilePath, (err) => {
        if (err) {
          return res.status(500).json({ msg: "Gagal menyimpan gambar" });
        }
      });
    }

    const { produk, harga } = req.body;

    await Product.update(
      {
        produk,
        harga,
        foto: fileName,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).json({ msg: "Produk berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// 🔹 DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  const product = await Product.findOne({
    where: { id: req.params.id },
  });

  if (!product) {
    return res.status(404).json({ msg: "Data tidak ditemukan" });
  }

  try {
    const filePath = `./public/images/product/${product.foto}`;
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await product.destroy();

    res.status(200).json({ msg: "Produk berhasil dihapus" });
  } catch (error) {
    console.log(error);
  }
};
