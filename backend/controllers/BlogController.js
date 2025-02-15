import Blog from "../models/BlogModel.js";
import path from "path";
import fs from "fs";

// **GET semua blog**

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();

    console.log("Blogs fetched:", blogs);

    const blogsWithImageUrl = blogs.map((blog) => ({
      ...blog.toJSON(),
      image: blog.image
        ? `http://localhost:5000/public/images/blogs/${blog.image}`
        : null,
    }));

    res.status(200).json(blogsWithImageUrl);
  } catch (error) {
    console.log("Error fetching blogs:", error);
    res.status(500).json({ message: error.message });
  }
};

// **GET blog berdasarkan ID**
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOne({ where: { id: req.params.id } });
    if (!blog) return res.status(404).json({ message: "Blog tidak ditemukan" });

    const blogWithImageUrl = {
      ...blog.toJSON(),
      image: blog.image
        ? `http://localhost:5000/public/images/blogs/${blog.image}`
        : null,
    };

    res.status(200).json(blogWithImageUrl);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// **POST tambah blog baru dengan upload gambar**
export const createBlog = async (req, res) => {
  try {
    console.log("Request files:", req.files); // Debugging

    if (!req.files || !req.files.image) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    const { title, content } = req.body;
    const file = req.files.image;

    // Validasi ukuran dan ekstensi file
    const allowedExtensions = [".png", ".jpg", ".jpeg"];
    const ext = path.extname(file.name).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      return res.status(422).json({ msg: "Invalid image format" });
    }
    if (file.size > 5 * 1024 * 1024) {
      return res.status(422).json({ msg: "File size should be less than 5MB" });
    }

    // Buat nama unik untuk file
    const fileName = `${Date.now()}_${file.name.replace(/\s/g, "_")}`;
    const uploadPath = `./public/images/blogs/${fileName}`;

    // Simpan file ke server
    file.mv(uploadPath, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res.status(500).json({ msg: err.message });
      }

      // Simpan data ke database
      const newBlog = await Blog.create({ title, content, image: fileName });
      res.status(201).json(newBlog);
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: error.message });
  }
};

// **PUT update blog termasuk mengganti gambar**
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ where: { id: req.params.id } });
    if (!blog) return res.status(404).json({ message: "Blog tidak ditemukan" });

    let fileName = blog.image; // Default tetap pakai gambar lama

    if (req.files && req.files.image) {
      const file = req.files.image;
      const ext = path.extname(file.name).toLowerCase();
      const allowedExtensions = [".png", ".jpg", ".jpeg"];

      if (!allowedExtensions.includes(ext)) {
        return res.status(422).json({ msg: "Invalid image format" });
      }
      if (file.size > 5 * 1024 * 1024) {
        return res
          .status(422)
          .json({ msg: "File size should be less than 5MB" });
      }

      // Hapus gambar lama jika ada
      if (blog.image) {
        const oldFilePath = `./public/images/blogs/${blog.image}`;
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }

      // Simpan gambar baru
      fileName = `${Date.now()}_${file.name.replace(/\s/g, "_")}`;
      file.mv(`./public/images/blogs/${fileName}`, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
    }

    await Blog.update(
      { title: req.body.title, content: req.body.content, image: fileName },
      { where: { id: req.params.id } }
    );

    res.status(200).json({ message: "Blog berhasil diperbarui" });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: error.message });
  }
};

// **DELETE blog dan hapus gambar terkait**
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ where: { id: req.params.id } });
    if (!blog) return res.status(404).json({ message: "Blog tidak ditemukan" });

    // Hapus gambar dari folder
    const filePath = `./public/images/blogs/${blog.image}`;
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await Blog.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Blog berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
